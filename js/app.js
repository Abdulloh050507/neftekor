let btn = document.querySelector('.header__menu-btn'),
    list = document.querySelector('.right__header-list'),
    header = document.querySelector('.header');

btn.addEventListener('click', () => {
    header.classList.add('open');
    list.style.top = '-35px';
    header.classList.add('black');
    btn.classList.add('black');
})

window.addEventListener('click', (event) => {
    if (event.target.classList.contains('black')) {
        list.style.top = '-700px';
        header.classList.remove('open');
    }
})