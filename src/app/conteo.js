export const conteo = () => {
    let endDate = new Date("may 14, 2023 00:00:00").getTime();
    let now = new Date().getTime();

    let difference = endDate - now;

    let segundos = 1000;
    let minutos = segundos * 60;
    let horas = minutos * 60;
    let dias = horas * 24;

    let timeDays = Math.floor(difference / dias);
    let timeHours = Math.floor((difference % dias) / horas);
    let timeMinutes = Math.floor((difference % horas) / minutos);
    let timeSeconds = Math.floor((difference % minutos) / segundos);

    document.getElementById("dias").innerHTML = timeDays;
    document.getElementById("horas").innerHTML = timeHours;
    document.getElementById("minutos").innerHTML = timeMinutes;
    document.getElementById("segundos").innerHTML = timeSeconds;
};

setInterval(conteo, 1000);
console.log(holi);
