// Şube Müdürlüğü Sınav Hazırlık - Ana Uygulama

class ExamApp {
    constructor() {
        this.progress = loadProgress();
        this.currentView = 'dashboard';
        this.currentTopic = null;
        this.flashcardIndex = 0;
        this.flashcards = [];
        this.quizQuestions = [];
        this.quizIndex = 0;
        this.quizScore = { correct: 0, wrong: 0 };
        this.quizTimer = null;
        this.quizStartTime = null;
        this.quizTimeLimit = 0;
        this.selectedAnswer = null;
        this.selectedExamId = 1; // Default to Exam 1

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.renderTopics();
        this.updateStats();
        this.populateQuizTopics();
    }

    setupEventListeners() {
        // Mobile menu
        document.getElementById('menuToggle').addEventListener('click', () => {
            document.getElementById('sidebar').classList.toggle('open');
            document.getElementById('sidebarOverlay').classList.toggle('open');
        });

        document.getElementById('sidebarOverlay').addEventListener('click', () => {
            document.getElementById('sidebar').classList.remove('open');
            document.getElementById('sidebarOverlay').classList.remove('open');
        });

        // Navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                const view = e.currentTarget.dataset.view;
                if (view) {
                    this.showView(view);
                    this.closeMobileMenu();
                }
            });
        });

        // Back buttons
        document.querySelectorAll('.back-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const back = e.currentTarget.dataset.back;
                if (back) {
                    // Reset quiz when going back from quiz view
                    if (this.currentView === 'quiz') {
                        this.resetQuiz();
                    }
                    this.showView(back);
                }
            });
        });

        // Mode buttons
        document.getElementById('modeFlashcards').addEventListener('click', () => {
            this.showView('topics');
        });

        document.getElementById('modeQuiz').addEventListener('click', () => {
            this.showView('quiz');
        });

        document.getElementById('modeExam').addEventListener('click', () => {
            document.getElementById('quizTopicSelect').value = 'all';
            document.getElementById('quizCountSelect').value = '60';
            document.getElementById('quizTimeSelect').value = '3600';
            this.showView('quiz');
        });

        // Flashcard
        document.getElementById('flashcard').addEventListener('click', () => {
            this.flipCard();
        });

        document.getElementById('btnRepeat').addEventListener('click', () => {
            this.markCard(false);
        });

        document.getElementById('btnKnow').addEventListener('click', () => {
            this.markCard(true);
        });

        // Quiz
        document.getElementById('startQuizBtn').addEventListener('click', () => {
            this.startQuiz();
        });

        document.getElementById('skipBtn').addEventListener('click', () => {
            this.skipQuestion();
        });

        document.getElementById('nextBtn').addEventListener('click', () => {
            this.nextQuestion();
        });

        document.getElementById('retryBtn').addEventListener('click', () => {
            this.resetQuiz();
        });

        document.getElementById('reviewBtn').addEventListener('click', () => {
            this.resetQuiz();
        });
    }

    closeMobileMenu() {
        document.getElementById('sidebar').classList.remove('open');
        document.getElementById('sidebarOverlay').classList.remove('open');
    }

    showView(viewName) {
        // Hide all views
        document.querySelectorAll('.view-container').forEach(v => {
            v.classList.remove('active');
        });

        // Show selected view
        const view = document.getElementById(viewName + 'View');
        if (view) {
            view.classList.add('active');
            this.currentView = viewName;
        }

        // Update nav
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.dataset.view === viewName) {
                link.classList.add('active');
            }
        });

        // Special handling for stats view
        if (viewName === 'stats') {
            this.renderStatsTopics();
            this.renderExamHistory();
        }
    }

    renderTopics() {
        const grids = [
            document.getElementById('topicsGrid'),
            document.getElementById('allTopicsGrid')
        ];
        const sidebar = document.getElementById('topicsList');

        const topicsHtml = examData.topics.map(topic => {
            const progress = this.getTopicProgress(topic.id);
            return `
                <div class="topic-card fade-in" data-topic-id="${topic.id}">
                    <div class="topic-header">
                        <span class="topic-icon">${topic.icon}</span>
                        <div class="topic-info">
                            <div class="topic-name">${topic.name}</div>
                            <div class="topic-meta">${topic.flashcards.length} kart • ${topic.questions.length} soru</div>
                        </div>
                    </div>
                    <div class="topic-progress">
                        <div class="topic-progress-bar">
                            <div class="topic-progress-fill" style="width: ${progress}%"></div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        grids.forEach(grid => {
            if (grid) {
                grid.innerHTML = topicsHtml;
                grid.querySelectorAll('.topic-card').forEach(card => {
                    card.addEventListener('click', () => {
                        const topicId = parseInt(card.dataset.topicId);
                        this.startFlashcards(topicId);
                    });
                });
            }
        });

        // Sidebar quick access
        const sidebarHtml = examData.topics.slice(0, 8).map(topic => `
            <li class="nav-item">
                <a class="nav-link" data-topic="${topic.id}">
                    <span class="nav-icon">${topic.icon}</span>
                    <span>${topic.name.length > 20 ? topic.name.substring(0, 18) + '...' : topic.name}</span>
                </a>
            </li>
        `).join('');

        sidebar.innerHTML = sidebarHtml;
        sidebar.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                const topicId = parseInt(link.dataset.topic);
                this.startFlashcards(topicId);
                this.closeMobileMenu();
            });
        });
    }

    getTopicProgress(topicId) {
        const studied = this.progress.flashcardsStudied[topicId] || [];
        const topic = examData.topics.find(t => t.id === topicId);
        if (!topic) return 0;
        return Math.round((studied.length / topic.flashcards.length) * 100);
    }

    updateStats() {
        // Total studied cards
        let totalStudied = 0;
        Object.values(this.progress.flashcardsStudied).forEach(arr => {
            totalStudied += arr.length;
        });

        // Total quizzes
        const quizResults = this.progress.quizResults || [];
        const totalQuizzes = quizResults.length;

        // Average accuracy
        let avgAccuracy = 0;
        if (totalQuizzes > 0) {
            const total = quizResults.reduce((sum, r) => sum + r.score, 0);
            avgAccuracy = Math.round(total / totalQuizzes);
        }

        // Overall progress
        let totalCards = 0;
        examData.topics.forEach(t => totalCards += t.flashcards.length);
        const overallProgress = Math.round((totalStudied / totalCards) * 100);

        // Update UI
        document.getElementById('statCards').textContent = totalStudied;
        document.getElementById('statQuizzes').textContent = totalQuizzes;
        document.getElementById('statAccuracy').textContent = avgAccuracy + '%';
        document.getElementById('overallProgress').textContent = overallProgress + '%';
        document.getElementById('progressFill').style.width = overallProgress + '%';

        // Stats view
        document.getElementById('statsCardsReviewed').textContent = totalStudied;
        document.getElementById('statsQuizzesTaken').textContent = totalQuizzes;
        document.getElementById('statsAvgScore').textContent = avgAccuracy + '%';

        // Topics studied
        const topicsStudied = Object.keys(this.progress.flashcardsStudied).filter(id => {
            const studied = this.progress.flashcardsStudied[id] || [];
            return studied.length > 0;
        }).length;
        document.getElementById('statsTopicsStudied').textContent = topicsStudied;
    }

    renderStatsTopics() {
        const grid = document.getElementById('statsTopicsGrid');

        const html = examData.topics.map(topic => {
            const progress = this.getTopicProgress(topic.id);
            const quizResults = (this.progress.quizResults || []).filter(r => r.topicId === topic.id);
            const avgScore = quizResults.length > 0
                ? Math.round(quizResults.reduce((s, r) => s + r.score, 0) / quizResults.length)
                : 0;

            return `
                <div class="topic-card">
                    <div class="topic-header">
                        <span class="topic-icon">${topic.icon}</span>
                        <div class="topic-info">
                            <div class="topic-name">${topic.name}</div>
                            <div class="topic-meta">
                                Kart: ${progress}% • Quiz: ${avgScore}%
                            </div>
                        </div>
                    </div>
                    <div class="topic-progress">
                        <div class="topic-progress-bar">
                            <div class="topic-progress-fill" style="width: ${progress}%"></div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        grid.innerHTML = html;
    }

    renderExamHistory() {
        const grid = document.getElementById('examHistoryGrid');
        const results = this.progress.quizResults || [];

        if (results.length === 0) {
            grid.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">📝</div>
                    <div class="empty-state-text">Henüz sınav çözmediniz</div>
                </div>
            `;
            return;
        }

        // Show last 10 results, newest first
        const recentResults = [...results].reverse().slice(0, 10);

        const html = recentResults.map(result => {
            const examId = result.examId || 1;
            const date = new Date(result.date);
            const dateStr = date.toLocaleDateString('tr-TR', { day: 'numeric', month: 'short', year: 'numeric' });
            const scoreClass = result.score >= 70 ? 'high' : result.score >= 50 ? 'medium' : 'low';
            const mins = Math.floor(result.time / 60);
            const secs = result.time % 60;

            return `
                <div class="exam-history-card">
                    <div class="exam-history-header">
                        <span class="exam-badge exam-${examId}">Sınav ${examId}</span>
                        <span class="exam-history-date">${dateStr}</span>
                    </div>
                    <div class="exam-history-score ${scoreClass}">${result.score}%</div>
                    <div class="exam-history-details">
                        <span>✅ ${result.correct}</span>
                        <span>❌ ${result.wrong}</span>
                        <span>⏱️ ${mins}:${secs.toString().padStart(2, '0')}</span>
                    </div>
                </div>
            `;
        }).join('');

        grid.innerHTML = html;
    }

    populateQuizTopics() {
        const select = document.getElementById('quizTopicSelect');
        examData.topics.forEach(topic => {
            const option = document.createElement('option');
            option.value = topic.id;
            option.textContent = topic.name;
            select.appendChild(option);
        });
    }

    // Flashcards
    startFlashcards(topicId) {
        const topic = examData.topics.find(t => t.id === topicId);
        if (!topic) return;

        this.currentTopic = topic;
        this.flashcards = [...topic.flashcards];
        this.flashcardIndex = 0;

        document.getElementById('flashcardTopicTitle').textContent = `${topic.icon} ${topic.name}`;
        document.getElementById('flashcardTopicDesc').textContent = `${topic.flashcards.length} kart • Kartın üzerine tıklayarak cevabı görün`;
        document.getElementById('totalCards').textContent = this.flashcards.length;

        this.showView('flashcards');
        this.showCurrentCard();
    }

    showCurrentCard() {
        if (this.flashcardIndex >= this.flashcards.length) {
            this.finishFlashcards();
            return;
        }

        const card = this.flashcards[this.flashcardIndex];
        document.getElementById('flashcardFront').textContent = card.front;
        document.getElementById('flashcardBack').textContent = card.back;
        document.getElementById('currentCardIndex').textContent = this.flashcardIndex + 1;

        // Reset flip
        document.getElementById('flashcard').classList.remove('flipped');

        // Update progress
        const progress = ((this.flashcardIndex) / this.flashcards.length) * 100;
        document.getElementById('flashcardProgressFill').style.width = progress + '%';
    }

    flipCard() {
        document.getElementById('flashcard').classList.toggle('flipped');
    }

    markCard(known) {
        if (known) {
            // Save to progress
            if (!this.progress.flashcardsStudied[this.currentTopic.id]) {
                this.progress.flashcardsStudied[this.currentTopic.id] = [];
            }
            if (!this.progress.flashcardsStudied[this.currentTopic.id].includes(this.flashcardIndex)) {
                this.progress.flashcardsStudied[this.currentTopic.id].push(this.flashcardIndex);
            }
            saveProgress(this.progress);
        } else {
            // Add to end for repeat
            const card = this.flashcards[this.flashcardIndex];
            this.flashcards.push(card);
            document.getElementById('totalCards').textContent = this.flashcards.length;
        }

        this.flashcardIndex++;
        this.showCurrentCard();
    }

    finishFlashcards() {
        this.updateStats();
        this.renderTopics();

        // Show completion message
        document.getElementById('flashcardFront').textContent = '🎉 Tebrikler!';
        document.getElementById('flashcardBack').textContent = 'Bu konudaki tüm kartları tamamladınız.';
        document.getElementById('flashcard').classList.remove('flipped');
        document.getElementById('flashcardProgressFill').style.width = '100%';
    }

    // Quiz
    startQuiz() {
        const examId = parseInt(document.getElementById('quizExamSelect').value);
        const topicId = document.getElementById('quizTopicSelect').value;
        const count = parseInt(document.getElementById('quizCountSelect').value);
        const time = parseInt(document.getElementById('quizTimeSelect').value);

        this.selectedExamId = examId;

        // Get topics based on selected exam
        let currentTopics;
        if (examId === 3) {
            currentTopics = exam3Topics;
        } else if (examId === 2) {
            currentTopics = exam2Topics;
        } else {
            currentTopics = examData.topics;
        }

        // Collect questions
        let questions = [];
        if (topicId === 'all') {
            currentTopics.forEach(topic => {
                topic.questions.forEach(q => {
                    questions.push({ ...q, topicId: topic.id, topicName: topic.name });
                });
            });
        } else {
            const topic = currentTopics.find(t => t.id === parseInt(topicId));
            if (topic) {
                topic.questions.forEach(q => {
                    questions.push({ ...q, topicId: topic.id, topicName: topic.name });
                });
            }
        }

        // Shuffle and limit
        questions = this.shuffleArray(questions).slice(0, count);

        if (questions.length === 0) {
            alert('Bu konuda soru bulunamadı!');
            return;
        }

        this.quizQuestions = questions;
        this.quizIndex = 0;
        this.quizScore = { correct: 0, wrong: 0 };
        this.quizTimeLimit = time;
        this.quizStartTime = Date.now();
        this.selectedAnswer = null;

        // Show quiz container
        document.getElementById('quizStart').style.display = 'none';
        document.getElementById('quizResults').style.display = 'none';
        document.getElementById('quizContainer').style.display = 'block';

        // Start timer
        if (time > 0) {
            this.startTimer(time);
        } else {
            document.getElementById('quizTimer').textContent = '--:--';
        }

        this.showCurrentQuestion();
    }

    shuffleArray(array) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    startTimer(seconds) {
        if (this.quizTimer) clearInterval(this.quizTimer);

        let remaining = seconds;
        this.updateTimerDisplay(remaining);

        this.quizTimer = setInterval(() => {
            remaining--;
            this.updateTimerDisplay(remaining);

            if (remaining <= 0) {
                clearInterval(this.quizTimer);
                this.finishQuiz();
            }
        }, 1000);
    }

    updateTimerDisplay(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        document.getElementById('quizTimer').textContent =
            `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    showCurrentQuestion() {
        const question = this.quizQuestions[this.quizIndex];

        document.getElementById('questionNumber').textContent =
            `Soru ${this.quizIndex + 1} / ${this.quizQuestions.length}`;
        document.getElementById('quizCurrentQ').textContent = this.quizIndex + 1;
        document.getElementById('questionText').textContent = question.q;

        // Render options
        const optionsList = document.getElementById('optionsList');
        const letters = ['A', 'B', 'C', 'D', 'E'];

        optionsList.innerHTML = question.options.map((opt, i) => `
            <button class="option-btn" data-index="${i}">
                <span class="option-letter">${letters[i]}</span>
                <span>${opt}</span>
            </button>
        `).join('');

        // Add click handlers
        optionsList.querySelectorAll('.option-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.selectAnswer(parseInt(btn.dataset.index));
            });
        });

        // Reset buttons
        document.getElementById('nextBtn').disabled = true;
        this.selectedAnswer = null;
    }

    selectAnswer(index) {
        if (this.selectedAnswer !== null) return;

        this.selectedAnswer = index;
        const question = this.quizQuestions[this.quizIndex];
        const correct = question.answer;

        const buttons = document.querySelectorAll('.option-btn');
        buttons.forEach((btn, i) => {
            if (i === correct) {
                btn.classList.add('correct');
            } else if (i === index && index !== correct) {
                btn.classList.add('wrong');
            }
            btn.disabled = true;
        });

        // Update score
        if (index === correct) {
            this.quizScore.correct++;
            document.getElementById('quizCorrect').textContent = this.quizScore.correct;
        } else {
            this.quizScore.wrong++;
            document.getElementById('quizWrong').textContent = this.quizScore.wrong;
        }

        document.getElementById('nextBtn').disabled = false;
    }

    skipQuestion() {
        this.quizScore.wrong++;
        document.getElementById('quizWrong').textContent = this.quizScore.wrong;
        this.nextQuestion();
    }

    nextQuestion() {
        this.quizIndex++;

        if (this.quizIndex >= this.quizQuestions.length) {
            this.finishQuiz();
        } else {
            this.showCurrentQuestion();
        }
    }

    finishQuiz() {
        if (this.quizTimer) clearInterval(this.quizTimer);

        const elapsed = Math.round((Date.now() - this.quizStartTime) / 1000);
        const total = this.quizScore.correct + this.quizScore.wrong;
        const score = total > 0 ? Math.round((this.quizScore.correct / total) * 100) : 0;

        // Save result
        if (!this.progress.quizResults) {
            this.progress.quizResults = [];
        }
        this.progress.quizResults.push({
            date: new Date().toISOString(),
            score: score,
            correct: this.quizScore.correct,
            wrong: this.quizScore.wrong,
            topicId: document.getElementById('quizTopicSelect').value === 'all'
                ? 'all'
                : parseInt(document.getElementById('quizTopicSelect').value),
            time: elapsed,
            examId: this.selectedExamId
        });
        saveProgress(this.progress);

        // Show results
        document.getElementById('quizContainer').style.display = 'none';
        document.getElementById('quizResults').style.display = 'block';

        document.getElementById('resultsScore').textContent = score + '%';
        document.getElementById('resultCorrect').textContent = this.quizScore.correct;
        document.getElementById('resultWrong').textContent = this.quizScore.wrong;

        const mins = Math.floor(elapsed / 60);
        const secs = elapsed % 60;
        document.getElementById('resultTime').textContent =
            `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

        // Icon based on score
        if (score >= 80) {
            document.getElementById('resultsIcon').textContent = '🎉';
            document.getElementById('resultsTitle').textContent = 'Mükemmel!';
        } else if (score >= 60) {
            document.getElementById('resultsIcon').textContent = '👍';
            document.getElementById('resultsTitle').textContent = 'İyi İş!';
        } else if (score >= 40) {
            document.getElementById('resultsIcon').textContent = '📚';
            document.getElementById('resultsTitle').textContent = 'Daha Fazla Çalışma Gerekli';
        } else {
            document.getElementById('resultsIcon').textContent = '💪';
            document.getElementById('resultsTitle').textContent = 'Vazgeçme!';
        }

        this.updateStats();
    }

    resetQuiz() {
        // Stop timer
        if (this.quizTimer) {
            clearInterval(this.quizTimer);
            this.quizTimer = null;
        }

        // Reset quiz state
        this.quizQuestions = [];
        this.quizIndex = 0;
        this.quizScore = { correct: 0, wrong: 0 };
        this.quizStartTime = null;
        this.quizTimeLimit = 0;
        this.selectedAnswer = null;

        // Reset UI counters
        document.getElementById('quizCorrect').textContent = '0';
        document.getElementById('quizWrong').textContent = '0';
        document.getElementById('quizCurrentQ').textContent = '1';
        document.getElementById('quizTimer').textContent = '--:--';

        // Reset views
        document.getElementById('quizContainer').style.display = 'none';
        document.getElementById('quizResults').style.display = 'none';
        document.getElementById('quizStart').style.display = 'block';
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.app = new ExamApp();
});
