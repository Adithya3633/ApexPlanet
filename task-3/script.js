// Quiz questions
const quizQuestions = [
    {
        question: "What is the primary cause of rain?",
        options: [
            "Condensation of water vapor",
            "Evaporation of water",
            "Melting of ice",
            "Freezing of water"
        ],
        correct: 0
    },
    {
        question: "Which of these is NOT a type of cloud?",
        options: [
            "Cumulus",
            "Stratus",
            "Nimbus",
            "Aquarius"
        ],
        correct: 3
    },
    {
        question: "What is the term for the boundary between two air masses?",
        options: [
            "Front",
            "Edge",
            "Border",
            "Line"
        ],
        correct: 0
    },
    {
        question: "Which weather phenomenon is measured on the Fujita scale?",
        options: [
            "Hurricanes",
            "Tornadoes",
            "Earthquakes",
            "Tsunamis"
        ],
        correct: 1
    }
];

// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedback = document.getElementById('feedback');
const scoreElement = document.getElementById('score');
const totalQuestionsElement = document.getElementById('total-questions');
const weatherData = document.getElementById('weather-data');

// Quiz state
let currentQuestion = 0;
let score = 0;
let selectedOption = null;

// Weather API
const API_URL = 'https://api.open-meteo.com/v1/forecast';
let userLocation = {
    latitude: 51.5074, // Default: London
    longitude: -0.1278,
    name: 'London'
};

// Initialize the app
function init() {
    startBtn.addEventListener('click', startQuiz);
    nextBtn.addEventListener('click', nextQuestion);
    restartBtn.addEventListener('click', restartQuiz);
    getUserLocation();
}

// Try to get user's location
function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                userLocation.latitude = position.coords.latitude;
                userLocation.longitude = position.coords.longitude;
                // Try to get city name via reverse geocoding
                userLocation.name = await getCityName(userLocation.latitude, userLocation.longitude);
                fetchWeather();
            },
            (error) => {
                // If denied or error, fallback to default (London)
                fetchWeather();
            }
        );
    } else {
        // Geolocation not supported
        fetchWeather();
    }
}

// Reverse geocoding to get city name
async function getCityName(lat, lon) {
    try {
        // Try Open-Meteo geocoding first
        const response = await fetch(`https://geocoding-api.open-meteo.com/v1/reverse?latitude=${lat}&longitude=${lon}&language=en&count=1`);
        if (!response.ok) {
            console.log('Geocoding API response not ok:', response.status);
            return await getCityNameFallback(lat, lon);
        }
        
        const data = await response.json();
        console.log('Geocoding API response:', data);
        
        // Check different possible response structures
        if (data && data.results && data.results[0]) {
            const result = data.results[0];
            // Try different name fields
            if (result.name) return result.name;
            if (result.city) return result.city;
            if (result.locality) return result.locality;
            if (result.admin1) return result.admin1;
        }
        
        // If no results or no name found, try fallback
        console.log('No city name found in geocoding response');
        return await getCityNameFallback(lat, lon);
    } catch (error) {
        console.error('Geocoding error:', error);
        return await getCityNameFallback(lat, lon);
    }
}

// Fallback geocoding using a different service
async function getCityNameFallback(lat, lon) {
    try {
        // Use Nominatim (OpenStreetMap) as fallback
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=10`);
        if (!response.ok) {
            console.log('Fallback geocoding failed:', response.status);
            return 'Your Location';
        }
        
        const data = await response.json();
        console.log('Fallback geocoding response:', data);
        
        if (data && data.address) {
            // Try to get city name from address components
            if (data.address.city) return data.address.city;
            if (data.address.town) return data.address.town;
            if (data.address.village) return data.address.village;
            if (data.address.county) return data.address.county;
            if (data.address.state) return data.address.state;
        }
        
        return 'Your Location';
    } catch (error) {
        console.error('Fallback geocoding error:', error);
        return 'Your Location';
    }
}

// Fetch weather data
async function fetchWeather() {
    try {
        const response = await fetch(
            `${API_URL}?latitude=${userLocation.latitude}&longitude=${userLocation.longitude}&current=temperature_2m,relative_humidity_2m,weather_code`
        );
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (!data || !data.current) {
            throw new Error('Invalid weather data received');
        }
        const weatherDescriptions = {
            0: 'Clear sky', 1: 'Mainly clear', 2: 'Partly cloudy', 3: 'Overcast', 45: 'Foggy', 48: 'Depositing rime fog',
            51: 'Light drizzle', 53: 'Moderate drizzle', 55: 'Dense drizzle', 61: 'Slight rain', 63: 'Moderate rain', 65: 'Heavy rain',
            71: 'Slight snow', 73: 'Moderate snow', 75: 'Heavy snow', 77: 'Snow grains', 80: 'Slight rain showers',
            81: 'Moderate rain showers', 82: 'Violent rain showers', 85: 'Slight snow showers', 86: 'Heavy snow showers',
            95: 'Thunderstorm', 96: 'Thunderstorm with slight hail', 99: 'Thunderstorm with heavy hail'
        };
        const weatherDescription = weatherDescriptions[data.current.weather_code] || 'Unknown';
        weatherData.innerHTML = `
            <p>Location: ${userLocation.name}</p>
            <p>Temperature: ${Math.round(data.current.temperature_2m)}°C</p>
            <p>Weather: ${weatherDescription}</p>
            <p>Humidity: ${data.current.relative_humidity_2m}%</p>
        `;
    } catch (error) {
        console.error('Error fetching weather:', error);
        weatherData.innerHTML = `
            <p>Unable to fetch weather data</p>
            <p>Error: ${error.message}</p>
            <p>Please try again later</p>
        `;
    }
}

// Start the quiz
function startQuiz() {
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    showQuestion();
}

// Show current question
function showQuestion() {
    const question = quizQuestions[currentQuestion];
    questionText.textContent = question.question;
    
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('div');
        button.className = 'option';
        button.textContent = option;
        button.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(button);
    });
    
    feedback.textContent = '';
    nextBtn.classList.add('hidden');
    selectedOption = null;
}

// Handle option selection
function selectOption(index) {
    if (selectedOption !== null) return;
    
    selectedOption = index;
    const options = optionsContainer.children;
    
    for (let option of options) {
        option.classList.remove('selected');
    }
    
    options[index].classList.add('selected');
    
    if (index === quizQuestions[currentQuestion].correct) {
        options[index].classList.add('correct');
        feedback.textContent = 'Correct!';
        score++;
    } else {
        options[index].classList.add('incorrect');
        options[quizQuestions[currentQuestion].correct].classList.add('correct');
        feedback.textContent = 'Incorrect!';
    }
    
    nextBtn.classList.remove('hidden');
}

// Move to next question
function nextQuestion() {
    currentQuestion++;
    
    if (currentQuestion < quizQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// Show quiz results
function showResults() {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    scoreElement.textContent = score;
    totalQuestionsElement.textContent = quizQuestions.length;
}

// Restart the quiz
function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    resultScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    startBtn.addEventListener('click', startQuiz);
    nextBtn.addEventListener('click', nextQuestion);
    restartBtn.addEventListener('click', restartQuiz);
    getUserLocation();
}); 