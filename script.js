function showDetails(button) {
    // Получаем родительский блок
    var block = button.parentElement;
    // Скрываем заголовок и кнопку
    block.querySelector('h2').style.display = 'none';
    button.style.display = 'none';
    // Показываем текст деталей
    var details = block.querySelector('.details');
    details.style.display = 'block';
}
document.querySelectorAll('.block2').forEach(block => {
    const title = block.querySelector('.hover-title');
    const originalText = title.textContent;
    const hoverContent = block.querySelector('.hover-content');
    const hoverTitleText = hoverContent.querySelector('.hover-title-text');
    // Проверяем ширину экрана
    if (window.innerWidth >= 768) { // Если экран больше или равен 768px
        block.addEventListener('mouseenter', () => {
            hoverTitleText.textContent = title.getAttribute('data-hover-title');
            hoverContent.style.display = 'block'; // Показываем новый контент
            title.style.display = 'none'; // Скрываем оригинальный заголовок
        });
        block.addEventListener('mouseleave', () => {
            hoverContent.style.display = 'none'; // Скрываем новый контент
            title.style.display = 'block'; // Показываем оригинальный заголовок
        });
    } else {
        // Если экран меньше 768px, сразу показываем контент
        hoverTitleText.textContent = title.getAttribute('data-hover-title');
        hoverContent.style.display = 'block'; // Показываем новый контент
        title.style.display = 'none'; // Скрываем оригинальный заголовок
    }
});




const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
// Скрываем иконку закрытия по умолчанию
const closeIcon = 'img/Property 1=Variant2.png'; // Иконка закрытия
const openIcon = 'img/Component 5.png'; // Иконка открытия
menuToggle.addEventListener('click', function() {
    mobileMenu.classList.toggle('active'); // Добавляем или убираем класс active
    // Меняем иконки
    if (mobileMenu.classList.contains('active')) {
        menuToggle.src = closeIcon; // Иконка закрытия
    } else {
        menuToggle.src = openIcon; // Иконка открытия
    }
});
