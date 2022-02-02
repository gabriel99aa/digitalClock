const mostrarReloj = ()=> {
    let fecha = new Date();
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    document.getElementById('hora').innerHTML = `${horas}:${minutos}:${segundos}`;

}

setInterval(mostrarReloj, 1000);