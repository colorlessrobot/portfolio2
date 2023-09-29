const relogio = document.getElementById("relogio");

function setRelogio(){
    let date = new Date();
    let horas = date.getHours();
    let minutos = date.getMinutes();
    let segundos = date.getSeconds();

    relogio.innerText = `${horas}:${minutos}:${segundos}`;
}
setInterval(setRelogio, 1000);