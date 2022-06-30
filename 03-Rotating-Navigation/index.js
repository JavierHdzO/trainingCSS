

const container = document.querySelector('.container');

const btnOpen = document.querySelector('#open');
const btnClose = document.querySelector('#close');

btnOpen.addEventListener('click', () => {
    container.classList.add('show-nav')
});

btnClose.addEventListener('click', () => {
    container.classList.remove('show-nav')
});


