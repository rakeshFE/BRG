const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
            }

        })
        burger.classList.toggle('toggle');
    })
}
navSlide();




function loadPage(identifier) {
    const bodyElement = document.querySelector('body');



    switch (identifier) {

        case 1:
            bodyElement.style.backgroundImage = 'url(./img/home.png)';

            showHideDivs(1);
            break;
        case 2:
            bodyElement.style.backgroundImage = 'url(./img/ourservices.png)';
            showHideDivs(2);
            break;
        case 3:
            bodyElement.style.backgroundImage = 'url(./img/about.png)';
            showHideDivs(3);
            break;
        case 4:
            bodyElement.style.backgroundImage = 'url(./img/ourwork.png)';
            showHideDivs(4);
            break;
        case 5:
            bodyElement.style.backgroundImage = 'url(./img/contact.png)';
            showHideDivs(5);
            break;
        default:
            bodyElement.style.backgroundImage = 'url(./img/home.png)';
            showHideDivs(1);
            break;
    }
    
}
showHideDivs(1);
function showHideDivs(ind) {
    const allDivs = document.querySelectorAll('.main-container');
    allDivs.forEach((divEle, index) => {
        if (index + 1 === ind) {
            divEle.style.display = "";
        } else {
            divEle.style.display = 'none';
        }
    });
}
