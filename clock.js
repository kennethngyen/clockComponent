const secondHand = document.querySelector('.hand-second')
const minuteHand = document.querySelector('.hand-minute')
const hourHand = document.querySelector('.hand-hour')


function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    console.log(seconds);
    const secondsInDegrees=((seconds/60)*360);
    secondHand.style.transform = `rotate(${90+secondsInDegrees}deg)`
    
    const minutes = now.getMinutes();
    const minutesInDegrees=((minutes/60)*360);
    minuteHand.style.transform = `rotate(${90+minutesInDegrees}deg)`

    const hours = now.getHours();
    const hoursInDegrees=((hours/12)*360);
    hourHand.style.transform = `rotate(${90+hoursInDegrees}deg)`
}

setInterval(setDate,1000)

const time = document.querySelector('.display-time')

function setDisplayTime(){
    const now = new Date();
    time.textContent=now.getHours()+":"+now.getMinutes()+":"+now.getSeconds();
}

setInterval(setDisplayTime,1000)