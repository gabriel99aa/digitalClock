const mostrarReloj = ()=> {
    let fecha = new Date();
    let horas = formatoHora(fecha.getHours());
    let minutos = formatoHora(fecha.getMinutes());
    let segundos = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${horas}:${minutos}:${segundos}`;

}

const formatoHora = (hora)=> {
    if (hora < 10){
        hora = '0' + hora;
    }
    return hora;
}

setInterval(mostrarReloj, 1000);


const mostrarFecha = ()=> {

    let fecha = new Date();
    let dia = formatoHora(fecha.getDay());
    let mes = formatoHora(fecha.getMonth());
    let year = formatoHora(fecha.getFullYear());
    document.getElementById('fecha').innerHTML = `${dia}/${mes}/${year} </br></br> Día/Mes/año`;
}
