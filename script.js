const nav = document.querySelector('.primary-navigation');
const menuBtn = document.querySelector('.btn-mobile-nav');

menuBtn.addEventListener('click', () => {
    const visibility = nav.getAttribute("data-visible");
    if (visibility === "false") {
        nav.setAttribute("data-visible", "true");
        menuBtn.setAttribute('aria-expanded', "true");
    }
    else {
        nav.setAttribute("data-visible", "false");
        menuBtn.setAttribute('aria-expanded', "false");

    }
        console.log(visibility);
});


// JSON data


// fetch('https://jsonplaceholder.typicode.com/todos/users')
fetch('/data.json')
    .then(response => response.json())
    .then(data => console.log(data.destinations[0].description))


