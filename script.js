let menu = document.querySelector("ul")
let menuIcon = document.querySelector(".hamb")
menuIcon.addEventListener("click",()=>{
    menuIcon.classList.toggle("active");
    menu.classList.toggle("active");
}

)