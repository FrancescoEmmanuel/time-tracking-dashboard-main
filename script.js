const daybtn = document.querySelector('#day-btn');
const weekbtn = document.querySelector('#week-btn');
const monthbtn = document.querySelector('#month-btn');

const duration = document.querySelectorAll('.duration');
const previous = document.querySelectorAll('.previous');

function day(){
    fetch("https://raw.githubusercontent.com/FrancescoEmmanuel/time-tracking-dashboard-main/main/data.json")
        .then(response => response.json())
        .then(data => {
            duration.forEach((e,i) => {
                duration[i].innerHTML = data[i].timeframes.daily.current + 'hrs';
                previous[i].innerHTML = 'Yesterday - ' + data[i].timeframes.daily.previous + 'hrs';
            })
        })
}

function week(){
    fetch("https://raw.githubusercontent.com/FrancescoEmmanuel/time-tracking-dashboard-main/main/data.json")
        .then(response => response.json())
        .then(data => {
            duration.forEach((e,i) => {
                duration[i].innerHTML = data[i].timeframes.weekly.current + 'hrs'
                previous[i].innerHTML = 'Last Week - ' + data[i].timeframes.weekly.previous + 'hrs'
            })
        })
}

function month(){
    fetch("https://raw.githubusercontent.com/FrancescoEmmanuel/time-tracking-dashboard-main/main/data.json")
        .then(response => response.json())
        .then(data => {
            duration.forEach((e,i) => {
                duration[i].innerHTML = data[i].timeframes.monthly.current + 'hrs'
                previous[i].innerHTML = 'Last Month - ' + data[i].timeframes.monthly.previous + 'hrs'
            })
        })
}



daybtn.addEventListener('click', () => {
    daybtn.classList.remove('dark')
    weekbtn.classList.add('dark')
    monthbtn.classList.add('dark')
    day()
})

weekbtn.addEventListener('click', () => {
    weekbtn.classList.remove('dark')
    monthbtn.classList.add('dark')
    daybtn.classList.add('dark')
    week()
})

monthbtn.addEventListener('click', () => {
    monthbtn.classList.remove('dark')
    daybtn.classList.add('dark')
    weekbtn.classList.add('dark')
    month()
})
