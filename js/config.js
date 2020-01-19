const home = {
    select: document.querySelector.bind(document),
    selectAll: document.querySelectorAll.bind(document)
};

const username = location.pathname.replace('/', '');

if (username === '') {
    home.select('#loading').classList.add('d-none');
    home.select('#main').classList.remove('d-none');
}