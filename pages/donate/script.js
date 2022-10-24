let buttonOpen = document.querySelector(".menu-button");
let buttonClosed = document.querySelector(".burger-cross");
let buttonMenu = document.querySelectorAll(".burger_nav-link");
const menu = document.querySelector(".burger-menu");
let overlay = document.querySelector(".overlay");

buttonOpen.addEventListener("click", openMenu);
buttonClosed.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

function openMenu() {
  overlay.classList.add("active");
  menu.classList.add("active");
}

function closeMenu() {
  overlay.classList.remove("active");
  menu.classList.remove("active");
}

buttonMenu.forEach((el) => el.addEventListener("click", closeMenu));

/*------------------AmountOfMoney--------*/
const formValue = document.querySelector(".money-amount");
const values = document.querySelectorAll(".sum");
formValue.value = 100;


values.forEach((el) =>
  el.addEventListener("click", () => {
          formValue.value = el.value;
      })
);

formValue.addEventListener('input', function() {
values.forEach(el=>{
    el.checked=false;
    if(formValue.value===el.value){
        el.checked=true;
    }
})
})

