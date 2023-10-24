const deg = 6;
const horas = document.querySelector('.hora');
const minutos = document.querySelector('.minuto');
const segundos = document.querySelector('.segundo');
const amPmIndicator = document.querySelector('.am-pm');

setInterval(() => {
    let tiempo = new Date();
    let hr = tiempo.getHours();
    let min = tiempo.getMinutes();
    let seg = tiempo.getSeconds();
    let amPm = 'AM';

    if (hr >= 12) {
        hr = hr - 12;
        amPm = 'PM';
    }
    if (hr === 0) {
        hr = 12; 
    }

    let hrDeg = (hr * 30) + (min / 2);
    let minDeg = (min * deg);
    let segDeg = (seg * deg);

    horas.style.transform = `rotate(${hrDeg}deg)`;
    minutos.style.transform = `rotate(${minDeg}deg)`;
    segundos.style.transform = `rotate(${segDeg}deg)`;

    amPmIndicator.textContent = amPm;
}, 1000); 
