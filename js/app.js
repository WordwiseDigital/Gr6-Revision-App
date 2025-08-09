document.addEventListener('DOMContentLoaded', () => {
    // Containers
    const topicsContainer = document.getElementById('topics-container');
    const comprehensionContainer = document.getElementById('comprehension-container');
    const quizContainer = document.getElementById('quiz-container');
    const resultsContainer = document.getElementById('results-container');
    const statsContainer = document.getElementById('stats-container');

    // Buttons
    const backBtn = document.getElementById('back-btn');
    const homeBtn = document.getElementById('home-btn');
    const nextBtn = document.getElementById('next-btn');
    const finishComprehensionBtn = document.getElementById('finish-comprehension-btn');

    // Display Elements
    const topicsDiv = document.getElementById('topics');
    const badgesContainer = document.getElementById('badges-container');
    const feedbackContainer = document.getElementById('feedback-container');
    const feedbackText = document.getElementById('feedback-text');
    const livesContainer = document.getElementById('lives-container');
    const currentScoreSpan = document.getElementById('current-score');
    const totalSafariScoreSpan = document.getElementById('total-safari-score');

    // State
    let currentTopic = null;
    let currentQuestionIndex = 0;
    let score = 0;
    let lives = 0;
    let answeredComprehensionQuestions = 0;
    let historyStack = [];

    // Persistent State
    let earnedBadges = [];
    let totalSafariScore = 0;

    // --- DATA PERSISTENCE ---
    function getFromStorage(key, defaultValue) {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : defaultValue;
    }

    function saveToStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    // --- UI DISPLAY FUNCTIONS ---
    function displayBadges() {
        badgesContainer.innerHTML = '<h3>My Kentekens</h3>';
        if (earnedBadges.length === 0) {
            const noBadgeText = document.createElement('p');
            noBadgeText.textContent = "Voltooi 'n onderwerp met 80% of meer om 'n kenteken te verdien!";
            badgesContainer.appendChild(noBadgeText);
        } else {
            earnedBadges.forEach(badgeName => {
                const badgeEl = document.createElement('span');
                badgeEl.className = 'badge';
                badgeEl.textContent = `🏅 ${badgeName}`;
                badgesContainer.appendChild(badgeEl);
            });
        }
    }

    function displayTotalSafariScore() {
        totalSafariScoreSpan.textContent = totalSafariScore;
    }

    function updateLives() {
        livesContainer.innerHTML = '❤️'.repeat(lives);
    }

    function updateScore() {
        currentScoreSpan.textContent = score;
    }

    // --- SCREEN MANAGEMENT ---
    function showScreen(screen) {
        // Hide all main containers
        [topicsContainer, comprehensionContainer, quizContainer, resultsContainer, statsContainer].forEach(c => c.classList.add('hidden'));

        // Show the requested screen
        if (screen) {
            screen.classList.remove('hidden');
        }
    }

    function showTopics() {
        historyStack = [];
        showScreen(topicsContainer);
        displayBadges();
        displayTotalSafariScore();
        updateNavButtons();
    }

    // --- QUIZ LOGIC ---
    function init() {
        earnedBadges = getFromStorage('afrikaansSafariBadges', []);
        totalSafariScore = getFromStorage('totalSafariScore', 0);

        topics.forEach(topic => {
            const button = document.createElement('button');
            button.textContent = topic.name;
            button.addEventListener('click', () => startQuiz(topic));
            topicsDiv.appendChild(button);
        });

        homeBtn.addEventListener('click', showTopics);
        nextBtn.addEventListener('click', () => {
            currentQuestionIndex++;
            displayQuestion();
        });
        finishComprehensionBtn.addEventListener('click', () => showResults());

        showTopics();
    }

    function startQuiz(topic) {
        currentTopic = topic;
        currentQuestionIndex = 0;
        score = 0;
        lives = 3;
        answeredComprehensionQuestions = 0;

        statsContainer.classList.remove('hidden');
        updateScore();
        updateLives();

        if (currentTopic.comprehension) {
            showScreen(comprehensionContainer);
            displayComprehension(currentTopic.comprehension);
        } else {
            showScreen(quizContainer);
            displayQuestion();
        }
    }

    function displayQuestion() {
        if (lives > 0 && currentQuestionIndex < currentTopic.questions.length) {
            const question = currentTopic.questions[currentQuestionIndex];
            document.getElementById('question').textContent = question.question;
            const optionsContainer = document.getElementById('options-container');
            optionsContainer.innerHTML = '';

            question.options.forEach(option => {
                const button = document.createElement('button');
                button.textContent = option;
                button.addEventListener('click', () => checkAnswer(option, button));
                optionsContainer.appendChild(button);
            });
            feedbackContainer.classList.add('hidden');
            nextBtn.classList.add('hidden');
        } else {
            showResults();
        }
    }

    function checkAnswer(selected, button) {
        const question = currentTopic.questions[currentQuestionIndex];
        const options = document.querySelectorAll('#options-container button');
        options.forEach(option => option.disabled = true);

        if (selected === question.answer) {
            score++;
            totalSafariScore++;
            saveToStorage('totalSafariScore', totalSafariScore);
            feedbackText.innerHTML = `<strong>Reg!</strong> ${question.explanation}`;
            feedbackContainer.className = 'correct-feedback';
        } else {
            lives--;
            feedbackText.innerHTML = `<strong>Verkeerd.</strong> Die korrekte antwoord is <strong>${question.answer}</strong>. ${question.explanation}`;
            feedbackContainer.className = 'incorrect-feedback';
        }

        options.forEach(option => {
            if (option.textContent === question.answer) {
                option.style.backgroundColor = '#4CAF50';
            } else if (option.textContent === selected) {
                option.style.backgroundColor = '#f44336';
            }
        });

        feedbackContainer.classList.remove('hidden');
        nextBtn.classList.remove('hidden');
        updateLives();
        updateScore();
    }

    function displayComprehension(comprehension) {
        const textDiv = document.getElementById('comprehension-text');
        const questionsDiv = document.getElementById('comprehension-questions');
        textDiv.innerHTML = `<p>${comprehension.text}</p>`;
        questionsDiv.innerHTML = '';
        finishComprehensionBtn.classList.add('hidden');

        comprehension.questions.forEach((question, index) => {
            const questionEl = document.createElement('div');
            questionEl.className = 'comprehension-q-group';
            questionEl.innerHTML = `<p>${index + 1}. ${question.question}</p>`;
            const optionsEl = document.createElement('div');
            question.options.forEach(option => {
                const button = document.createElement('button');
                button.textContent = option;
                button.addEventListener('click', (e) => checkComprehensionAnswer(e.target, option, question.answer, question.explanation));
                optionsEl.appendChild(button);
            });
            questionEl.appendChild(optionsEl);
            questionsDiv.appendChild(questionEl);
        });
    }

    function checkComprehensionAnswer(button, selected, correct, explanation) {
        const parentGroup = button.closest('.comprehension-q-group');
        Array.from(parentGroup.querySelectorAll('button')).forEach(btn => {
            btn.disabled = true;
            if (btn.textContent === correct) {
                btn.style.backgroundColor = 'green';
            }
        });

        if (selected === correct) {
            score++;
            totalSafariScore++;
            saveToStorage('totalSafariScore', totalSafariScore);
        } else {
            lives--;
            button.style.backgroundColor = 'red';
        }

        answeredComprehensionQuestions++;
        updateScore();
        updateLives();

        if (answeredComprehensionQuestions === currentTopic.comprehension.questions.length) {
            finishComprehensionBtn.classList.remove('hidden');
        }
    }

    function showResults() {
        showScreen(resultsContainer);
        statsContainer.classList.add('hidden');

        const totalQuestions = currentTopic.questions ? currentTopic.questions.length : currentTopic.comprehension.questions.length;
        let message = `Jy het ${score} uit ${totalQuestions} reg!`;

        const percentage = (score / totalQuestions) * 100;
        if (percentage >= 80 && !earnedBadges.includes(currentTopic.name)) {
            earnedBadges.push(currentTopic.name);
            saveToStorage('afrikaansSafariBadges', earnedBadges);
            message += `<br>🎉 Jy het die ${currentTopic.name} kenteken verdien!`;
        }

        if (lives <= 0) {
            message = "Speletjie verby! " + message;
        }

        document.getElementById('score').innerHTML = message;

        // Add a button to go back to the home screen
        const homeButton = document.createElement('button');
        homeButton.textContent = 'Terug na hoofblad';
        homeButton.onclick = showTopics;
        resultsContainer.appendChild(homeButton);
    }

    // --- INITIALIZATION ---
    init();
});
