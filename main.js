import './scss/main.scss';

document.querySelector("#btn-toggle-theme").addEventListener("click", (e) => {
    document.documentElement.dataset.theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
});
