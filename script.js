document.addEventListener('DOMContentLoaded', () => {
    const topicsContainer = document.getElementById('topics-container');
    const comprehensionContainer = document.getElementById('comprehension-container');
    const quizContainer = document.getElementById('quiz-container');
    const resultsContainer = document.getElementById('results-container');
    const topicsDiv = document.getElementById('topics');
    const backBtn = document.getElementById('back-btn');
    const homeBtn = document.getElementById('home-btn');
    const forwardBtn = document.getElementById('forward-btn');

    let currentTopic = null;
    let currentQuestionIndex = 0;
    let score = 0;
    let historyStack = [];

    function updateNavButtons() {
        backBtn.classList.toggle('hidden', historyStack.length <= 1);
        homeBtn.classList.toggle('hidden', historyStack.length === 0);
        forwardBtn.classList.add('hidden'); // Forward button functionality is complex, so we'll keep it simple for now.
    }

    function showTopics() {
        historyStack = [];
        topicsContainer.classList.remove('hidden');
        comprehensionContainer.classList.add('hidden');
        quizContainer.classList.add('hidden');
        resultsContainer.classList.add('hidden');
        updateNavButtons();
    }

    function init() {
        topics.forEach(topic => {
            const button = document.createElement('button');
            button.textContent = topic.name;
            button.addEventListener('click', () => startQuiz(topic));
            topicsDiv.appendChild(button);
        });
        homeBtn.addEventListener('click', showTopics);
        backBtn.addEventListener('click', () => {
            if (historyStack.length > 1) {
                historyStack.pop();
                const prevState = historyStack[historyStack.length - 1];
                loadState(prevState);
            }
        });
        showTopics();
    }

    function loadState(state) {
        currentTopic = state.topic;
        currentQuestionIndex = state.questionIndex;
        score = state.score;

        topicsContainer.classList.add('hidden');
        comprehensionContainer.classList.add('hidden');
        quizContainer.classList.add('hidden');
        resultsContainer.classList.add('hidden');

        if (currentTopic.comprehension) {
            comprehensionContainer.classList.remove('hidden');
            displayComprehension(currentTopic.comprehension);
        } else {
            quizContainer.classList.remove('hidden');
            displayQuestion();
        }
        updateNavButtons();
    }

    function startQuiz(topic) {
        const state = {
            topic: topic,
            questionIndex: 0,
            score: 0
        };
        historyStack.push(state);
        loadState(state);
    }

    function displayComprehension(comprehension) {
        const textDiv = document.getElementById('comprehension-text');
        const questionsDiv = document.getElementById('comprehension-questions');
        textDiv.innerHTML = `<p>${comprehension.text}</p>`;

        comprehension.questions.forEach((question, index) => {
            const questionEl = document.createElement('div');
            questionEl.innerHTML = `<p>${index + 1}. ${question.question}</p>`;
            const optionsEl = document.createElement('div');
            question.options.forEach(option => {
                const button = document.createElement('button');
                button.textContent = option;
                button.addEventListener('click', () => checkComprehensionAnswer(button, option, question.answer));
                optionsEl.appendChild(button);
            });
            questionEl.appendChild(optionsEl);
            questionsDiv.appendChild(questionEl);
        });
    }

    function checkComprehensionAnswer(button, selected, correct) {
        if (selected === correct) {
            button.style.backgroundColor = 'green';
            score++;
        } else {
            button.style.backgroundColor = 'red';
        }
        // Disable all buttons for this question
        Array.from(button.parentElement.children).forEach(btn => {
            btn.disabled = true;
        });
    }


    function displayQuestion() {
        if (currentQuestionIndex < currentTopic.questions.length) {
            const question = currentTopic.questions[currentQuestionIndex];
            document.getElementById('question').textContent = question.question;
            const optionsContainer = document.getElementById('options-container');
            optionsContainer.innerHTML = '';

            question.options.forEach(option => {
                const button = document.createElement('button');
                button.textContent = option;
                button.addEventListener('click', () => checkAnswer(option));
                optionsContainer.appendChild(button);
            });
        } else {
            showResults();
        }
    }

    function checkAnswer(selected) {
        const question = currentTopic.questions[currentQuestionIndex];
        if (selected === question.answer) {
            score++;
        }
        currentQuestionIndex++;
        displayQuestion();
    }

    function showResults() {
        quizContainer.classList.add('hidden');
        resultsContainer.classList.remove('hidden');
        document.getElementById('score').textContent = `Jy het ${score} uit ${currentTopic.questions.length} reg!`;
    }

    document.getElementById('next-btn').addEventListener('click', () => {
        if (currentTopic && !currentTopic.comprehension) {
            displayQuestion();
        }
    });

    init();
});
