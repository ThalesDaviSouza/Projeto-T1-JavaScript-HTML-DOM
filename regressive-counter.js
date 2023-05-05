const second = 1000;
const minute = second * 60
const hour = minute * 60
const day = hour * 24 

document.addEventListener("DOMContentLoaded", () => {
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

        
        let stillTime = (deadlineDate.getTime() - actualDate.getTime()) > 0

        if(stillTime){
            setDayRemaining(counter, stillTime)
        }

        console.log(counter.querySelector('.day'))

    })
})

function millisecondsToDays(milliseconds){
    return Math.floor((milliseconds % day))
}

function setDayRemaining(counter, stillTime){
    console.log(millisecondsToDays(stillTime))
    counter.querySelector('.day').innerHtml = `${millisecondsToDays(stillTime)}`  
}