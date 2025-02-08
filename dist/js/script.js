'use strict'
const btn = document.querySelector('button.mobile-menu-button')
const menu = document.querySelector('.mobile-menu')
btn.addEventListener("click",()=> {
    menu.classList.toggle("hidden")

});

document.addEventListener("click", (event) =>
{
    const isClickInMenu = menu.contains(event.target)
    const isClickOnMenu = btn.contains(event.target)
    if (!isClickInMenu && !isClickOnMenu){
        menu.classList.add("hidden")
    }
})