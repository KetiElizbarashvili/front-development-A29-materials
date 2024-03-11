// Please don't change the code below. It's necessary to properly adjust the elements positioning :)
let team1 = document.querySelector('.team1')
let team2 = document.querySelector('.team2')
let team3 = document.querySelector('.team3')
let height = Math.max(parseInt(getComputedStyle(team1).getPropertyValue('height')), parseInt(getComputedStyle(team2).getPropertyValue('height')), parseInt(getComputedStyle(team3).getPropertyValue('height')))
team1.style.height = `${height}px`
team2.style.height = `${height}px`
team3.style.height = `${height}px`

// Function to be called when clicking on the arrow
function scrollDown() {
    window.scrollTo({top: window.innerHeight, behavior: 'smooth' });
}

// Fix the errors made when handling the event
let button = document.querySelector('.arrow-next')
addEventListener('click', scrollDown)

function change_theme() {
   let header = document.querySelector('header')
   header.style.background = 'url(/uploads/2022/11/bg_space.png)'
   header.style.backgroundSize = 'cover'
}


let change_theme_button = document.querySelector('.switch-theme-button')
change_theme_button.addEventListener('click', change_theme)

function value( ) {
    let n1=1000
    let n2 = 2000
    let n3= 3000

    let result= n1 * n2 * n3

    console.log (result)
}

function makeTransparent() {
  sendBtn.style.backgroundColor = 'transparent';
}

function makeColorful() {
  sendBtn.style.backgroundColor = '#C2AB99';
}

let sendBtn = document.querySelector('.submit-btn-send');

sendBtn.addEventListener('mouseover', makeTransparent);
sendBtn.addEventListener('mouseout', makeColorful); 