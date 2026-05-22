

const calendarIcon =
document.querySelector(".calendar-icon");

const calendarPopup =
document.querySelector(".calendar-popup");


calendarIcon.addEventListener("click", ()=>{

    calendarPopup.classList.toggle("active");

});

