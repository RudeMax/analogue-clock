let secondHand = document.querySelector('#second-hand');
let minuteHand = document.querySelector('#minute-hand'); 
let hourHand = document.querySelector('#hour-hand');


function showTime() {
    let time = new Date();
    let seconds = time.getSeconds();
    let minutes = time.getMinutes();
    let hours = time.getHours();
    secondHand.style.transform = 'rotate(' + (180 + seconds * 360/60) + 'deg)';
    minuteHand.style.transform = 'rotate(' + (180 + minutes * 360/60) + 'deg)';
    hourHand.style.transform = 'rotate(' + (180 + hours * 360/12) + 'deg)'; 
    
}

let interval = setInterval(showTime, 1000);



