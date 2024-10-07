// JavaScript для подсказок (tooltips)
const tooltipTriggers = document.querySelectorAll('.tooltip-trigger');

tooltipTriggers.forEach(trigger => {
    const tooltip = trigger.nextElementSibling;

    trigger.addEventListener('mouseenter', () => {
        tooltip.style.visibility = 'visible';
        tooltip.style.opacity = '1';
        copyright.style.color = '#000'; // Изменяем цвет текста на черный
    });

    trigger.addEventListener('mouseleave', () => {
        tooltip.style.visibility = 'hidden';
        tooltip.style.opacity = '0';
        copyright.style.color = '#fff'; // Изменяем цвет текста на черный
    });
});

// Открытие и закрытие QR-кода
const shareContactTrigger = document.querySelector('.share-contact-trigger');
const qrCodePopup = document.querySelector('.qr-code-popup');
const closeBtn = document.querySelector('.close-btn');

shareContactTrigger.addEventListener('click', () => {
    qrCodePopup.style.display = 'flex'; // Показываем блок с QR-кодом
});

closeBtn.addEventListener('click', () => {
    qrCodePopup.style.display = 'none'; // Скрываем блок с QR-кодом при клике на крестик
});
