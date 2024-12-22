
let currentIndex = 0;

function moveSlide(direction) {
    const cards = document.querySelectorAll('.highlight-card');
    currentIndex += direction;

    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex >= cards.length) currentIndex = cards.length - 1;

    const offset = -currentIndex * 320; // Adjust based on card width
    cards.forEach(card => {
        card.style.transform = `translateX(${offset}px)`;
    });}

function sendWhatsAppMessage() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Форматирование сообщения
    const formattedMessage = `*Name:* ${name}\n*Email:* ${email}\n*Message:* ${message}`;
    
    // Ваш номер WhatsApp
    const whatsappNumber = "+77782693767"; // Укажите ваш номер телефона
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(formattedMessage)}`;

    // AJAX-запрос для отправки email (пример)
    fetch('submit_form.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}`
    })
    .then(response => {
        if (response.ok) {
            // Открытие WhatsApp
            window.open(whatsappUrl, '_blank');
        } else {
            alert('Error sending email.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error sending email.');
    });

    // Возвращаем false, чтобы форма не отправлялась
    return false; // Чтобы предотвратить обычное отправление формы
}

