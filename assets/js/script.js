const burgerMenu = document.querySelector(".burgerMenu");
const navbarList = document.querySelector(".navbar__list");
const header = document.querySelector(".header");
let toggle = false;

burgerMenu.addEventListener("click", function(){
    if(toggle == false){
        // burgerMenu.firstElementChild.nextElementSibling.style.display = "none";
        navbarList.classList.add("removeHide");
        header.style.height = "230px";
        toggle = !toggle;
    }
    else{
        // burgerMenu.firstElementChild.nextElementSibling.style.display = "flex";
        navbarList.classList.remove("removeHide");
        header.style.height = "105px";
        toggle = !toggle;
    }    
})