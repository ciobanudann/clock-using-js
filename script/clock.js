setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock(){
    const curentDate = new Date();
    const secondsRation = curentDate.getSeconds() / 60;
    const minutesRation = (secondsRation + curentDate.getMinutes()) / 60;
    const hoursRation = (minutesRation + curentDate.getHours()) / 12;
    console.log(hourHand);
    setRotation(secondHand, secondsRation);
    setRotation(minuteHand, minutesRation);
    setRotation(hourHand, hoursRation);
}

function setRotation(element, rotationRatioN){
    element.style.setProperty('--rotation', rotationRatioN * 360)
}

setClock();