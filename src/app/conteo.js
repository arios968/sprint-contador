export const conteo = () => {
    let endDate = new Date("may 14, 2023 00:00:00").getTime();
    let now = new Date().getTime();

    let difference = endDate - now;

    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes * 60;
    let days = hours * 24;

    let timeDays = Math.floor(difference / days);
    let timeHours = Math.floor((difference % days) / hours);
    let timeMinutes = Math.floor((difference % hours) / minutes);
    let timeSeconds = Math.floor((difference % minutes) / seconds);

    document.getElementById("dias").innerHTML = timeDays;
    document.getElementById("horas").innerHTML = timeHours;
    document.getElementById("minutos").innerHTML = timeMinutes;
    document.getElementById("segundos").innerHTML = timeSeconds;
};

setInterval(conteo, 1000);
console.log(holi);
