const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24; 

document.addEventListener("DOMContentLoaded", () => {
    setInterval(regressiveCounter, 1000)
})

function regressiveCounter(){
    document.querySelectorAll('.regressive-counter').forEach(counter => {
        let deadlineData = {
            year: counter.dataset.deadlineYear,
            mounth: counter.dataset.deadlineMounth,
            day: counter.dataset.deadlineDay,
            Hour: counter.dataset.deadlineHour,
            minute: counter.dataset.deadlineMinute,
            second: counter.dataset.deadlineSecond
        }

        let deadlineDate = new Date(deadlineData.year, deadlineData.mounth, deadlineData.day, deadlineData.Hour, deadlineData.minute, deadlineData.second)
        
        let actualDate = new Date()
        console.log(deadlineDate.getTime(), actualDate.getTime())
        let datesDifference = deadlineDate.getTime() - actualDate.getTime() 
        
        let stillTime = datesDifference > 0

        if(stillTime){
            setDaysRemaining(counter, datesDifference)
            setHoursRemaining(counter, datesDifference)
            setMinutesRemaining(counter, datesDifference)
            setSecondsRemaining(counter, datesDifference)
        }else{
            showHiddenCountdown(counter)
        }
    })
}

function showHiddenCountdown(counter){
    counter.querySelector('.day-section').style.display='none'
    counter.querySelector('.hour-section').style.display='none'
    counter.querySelector('.minute-section').style.display='none'
    counter.querySelector('.second-section').style.display='none'
    counter.querySelector('.msg-section').style.display=''
}

function millisecondsToDays(milliseconds){
    return Math.floor((milliseconds / day))
}

function millisecondsToHours(milliseconds){
    return Math.floor((milliseconds % day) / hour)
}

function millisecondsToMinutes(milliseconds){
    return Math.floor((milliseconds % hour) / minute)
}

function millisecondsToSeconds(milliseconds){
    return Math.floor((milliseconds % minute) / second)
}

function setDaysRemaining(counter, milliseconds){
    let daysLeft = millisecondsToDays(milliseconds);
    counter.querySelector('.day').innerHTML = daysLeft
    
    if(daysLeft > 1){
        counter.querySelector('.text-day').innerHTML = 'Days'
    }else{
        counter.querySelector('.text-day').innerHTML = 'Day'
    }
}

function setHoursRemaining(counter, milliseconds){
    let hoursLeft = millisecondsToHours(milliseconds)
    counter.querySelector('.hour').innerHTML = hoursLeft
    
    if(hoursLeft > 1){
        counter.querySelector('.text-hour').innerHTML = 'Hours'
    }else{
        counter.querySelector('.text-hour').innerHTML = 'Hour'
    }
}

function setMinutesRemaining(counter, milliseconds){
    let minutesLeft = millisecondsToMinutes(milliseconds)
    counter.querySelector('.minute').innerHTML = minutesLeft

    if(minutesLeft > 1){
        counter.querySelector('.text-minute').innerHTML = 'Minutes'
    }else{
        counter.querySelector('.text-minute').innerHTML = 'Minute'
    }
}

function setSecondsRemaining(counter, milliseconds){
    let secondsLeft = millisecondsToSeconds(milliseconds)
    counter.querySelector('.second').innerHTML = secondsLeft

    if(secondsLeft > 1){
        counter.querySelector('.text-second').innerHTML = 'Seconds'
    }else{
        counter.querySelector('.text-second').innerHTML = 'Second'
    }
}