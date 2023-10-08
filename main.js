const imageContainer = document.querySelector('.image-container');

imageContainer.addEventListener('animationend', () => {
    // หยุดการ fade และเคลื่อนไหว
    imageContainer.style.animation = 'none';

    // ซ่อนรูปภาพหายไป
    imageContainer.style.opacity = '0';
});