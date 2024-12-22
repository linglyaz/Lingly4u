document.addEventListener("DOMContentLoaded", function () {
    const lessonContainer = document.getElementById("lesson-container");

    // Дата начала урока (пример: 1 октября 2024 года)
    const lessonStartDate = new Date("2024-11-01");

    // Получаем текущую дату
    const currentDate = new Date();

    // Вычисляем разницу в неделях
    const timeDifference = currentDate - lessonStartDate;
    const weeksPassed = timeDifference / (1000 * 60 * 60 * 24 * 7);

    // Проверяем, прошло ли 14 недель
    if (weeksPassed >= 14) {
        // Если прошло 14 недель, добавляем HTML для "Final Test"
        const pillHTML = `
            <div class="pill hoverable">
                <a href="https://sites.google.com/view/ling4youfinaltest/%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F-%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0" rel="bookmark" title="Lesson 14">
                    <img src="C:/Users/user/OneDrive/Рабочий%20стол/мультимедия/Изображение%20WhatsApp%202024-12-04%20в%2012.28.52_baf0a57a.jpg" alt="Sample Test 7">
                    <div class="pill-body test-item-caption">
                        <h4>Final Test</h4>
                    </div>
                </a>
            </div>
        `;
        lessonContainer.innerHTML = pillHTML;
    }
});