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
        let test = deadlineDate.getTime() - actualDate.getTime()
        
        console.log(test)
        console.log(counter.querySelector('.day'))

    })
})