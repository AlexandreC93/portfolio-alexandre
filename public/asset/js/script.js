const skillsPage = document.getElementById("skills-page")
const profilPage = document.getElementById("profil-page")
const projectsPage = document.getElementById("projects-page")
const contactPage = document.getElementById("contact-page")

window.addEventListener('scroll', function () {

    scrollValue = (window.innerHeight + window.scrollY) / (document.body.offsetHeight)

    console.log(skillsPage);
    console.log(scrollValue);


    //on scroll
    // if (scrollValue > 0.20) {
    //     profilPage.style.opacity = '1';
    // }
    if (scrollValue > 0.51) {
        projectsPage.style.opacity = '1';
    }
    if (scrollValue > 0.80) {
        skillsPage.style.opacity = '1';
    }
    if (scrollValue > 1.05) {
        contactPage.style.opacity = '1';
    }
})