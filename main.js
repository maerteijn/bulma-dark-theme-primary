import './scss/main.scss';

document.querySelector("#btn-toggle-theme").addEventListener("click", (e) => {
    document.documentElement.classList.toggle("theme-dark");
});
