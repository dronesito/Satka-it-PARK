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
    block.addEventListener('mouseenter', () => {
        hoverTitleText.textContent = title.getAttribute('data-hover-title');
        hoverContent.style.display = 'block'; // Показываем новый контент
        title.style.display = 'none'; // Скрываем оригинальный заголовок
    });
    block.addEventListener('mouseleave', () => {
        hoverContent.style.display = 'none'; // Скрываем новый контент
        title.style.display = 'block'; // Показываем оригинальный заголовок
    });
});