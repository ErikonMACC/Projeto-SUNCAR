function showMenu() {
    var x = document.querySelector(".myLinksMobile");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

const icon = document.querySelector('.icon');
const buttons = document.querySelectorAll('.buttonMobile')

icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
    showMenu()
});


buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        icon.classList.toggle("open");
        showMenu()
    });
});
