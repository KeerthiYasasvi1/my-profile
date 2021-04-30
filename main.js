const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('toggle', 'menu')


const navLink = document.querySelectorAll('.link');

function linkAction() {

    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');


    const navMenu = document.getElementById('menu')
    menu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));


const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});


sr.reveal('.homeTitle', {});
sr.reveal('.button', { delay: 200 });
sr.reveal('.homeImg', { delay: 400 });
sr.reveal('.homeSocial-icon', { interval: 200 });


sr.reveal('.aboutSubtitle', { delay: 400 });
sr.reveal('.aboutText', { delay: 400 });


sr.reveal('.skillsSubtitle', {});
sr.reveal('.skillsText', {});
sr.reveal('.skillsData', { interval: 200 });
sr.reveal('.skillsImg', { delay: 600 });