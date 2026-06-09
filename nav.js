document.addEventListener("DOMContentLoaded", function() {
    const navSocial = document.querySelector(".nav-social");
    if (navSocial) {
        navSocial.innerHTML = `
            <a href="mailto:yakshgoyani@gmail.com">EMAIL</a>
            <a href="https://www.linkedin.com/in/ygoyani" target="_blank">LINKEDIN</a>
            <a href="https://github.com/yakshG" target="_blank">GITHUB</a>
        `;
    }
});