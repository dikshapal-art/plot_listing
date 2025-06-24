let nvbtn = document.querySelectorAll(".item2 button");
let len = nvbtn.length;

for (let i = 0; i < len; i++) { 
    nvbtn[i].classList.add("navbtns");
}


const navbar = document.getElementById("mynav"); 
console.log(navbar);
window.addEventListener("scroll", function () {

    if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

