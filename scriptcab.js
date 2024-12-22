
    // Пример: обновление статуса урока
    const lessons = [
        { id: 1, name: "Lesson 1", status: "completed" },
        { id: 2, name: "Lesson 2", status: "in-progress" },
        { id: 3, name: "Lesson 3", status: "not-started" },
    ];

    // Отображение прогресса
    function renderProgress() {
        const progressSection = document.querySelector('.lesson-progress');
        progressSection.innerHTML = ''; // Очистка контента

        lessons.forEach(lesson => {
            progressSection.innerHTML += `
                <div class="lesson">
                    <h3>${lesson.name}</h3>
                    <p>Status: <span class="${lesson.status}">${lesson.status.replace('-', ' ')}</span></p>
                </div>
            `;
        });
    }

    renderProgress();

    const express = require('express');
    const app = express();
    const PORT = 3000;
    
    // Имитация базы данных
    const studentProgress = {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        lessons: [
            { name: "Lesson 1", status: "completed" },
            { name: "Lesson 2", status: "in-progress" },
            { name: "Lesson 3", status: "not-started" }
        ]
    };
    
    app.get('/api/progress', (req, res) => {
        res.json(studentProgress);
    });
    
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });

    fetch('/api/progress')
    .then(response => response.json())
    .then(data => {
        console.log(data); // Используем данные для рендера
        renderProgress(data.lessons);
    });
