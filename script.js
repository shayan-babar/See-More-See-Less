function toggleParagraph() {
    const paragraph = document.querySelector('.paragraph');
    const btn = document.querySelector('.btn');

    if (paragraph.classList.contains('expanded')) {
        paragraph.classList.remove('expanded');
        btn.textContent = 'See more';
    } else {
        paragraph.classList.add('expanded');
        btn.textContent = 'See less';
    }
}
