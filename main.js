function toggleClass() {
    const andig = document.querySelector("#andig");
    andig.classList.toggle("light");
}

function updateClock() {
    let now = new Date();
    let day_name = now.getDay();
    let month = now.getMonth();
    let day_num = now.getDate();
    let year = now.getFullYear();

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let ids = ["day_name", "month", "day_num", "year"];
    let values = [week[day_name], months[month], day_num, year];
    for (let i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1);
}

const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

    let hours = document.querySelector("#hours");
    let minitues = document.querySelector("#minitues");
    let seconds = document.querySelector("#seconds");
    let ampm = document.querySelector("#ampm");

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = "AM";
    // let format;

    // if (format == 12) {
    //     h = (h > 12) ? h % 12 : h;

    // }

    // if (h >= 12) {
    //     h = (h - 12) ? am = "PM" : h;

    // }

    if (h > 12) {
        h = h - 12;
        am = "PM";
    }

    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }

    hours.innerHTML = h;
    minitues.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;

})