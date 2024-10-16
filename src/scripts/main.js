AOS.init();

const dataDoEvento = new Date ('dec 15, 2024 19:00:00');
const tempoDoEvento = dataDoEvento.getTime();

const contadorDeHoras = setInterval(function() {
    const agora = new Date();
    const tempoAgora = agora.getTime();

    const distanciaDoEvento = tempoDoEvento - tempoAgora;

    const dias = 1000 * 60 * 60 * 24;
    const horas = 1000 * 60 * 60;
    const minutos = 1000 * 60;

    const diaDoEvento = Math.floor((distanciaDoEvento / dias));
    const horaDoEvento = Math.floor((distanciaDoEvento % dias) / horas);
    const minutosDoEvento = Math.floor((distanciaDoEvento % horas) / minutos);
    const segundosDoEvento = Math.floor((distanciaDoEvento % minutos) / 1000);

    document.getElementById('contador').innerHTML = `${diaDoEvento}d ${horaDoEvento}h ${minutosDoEvento}m ${segundosDoEvento}s`;

    if(distanciaDoEvento < 0) {
        clearInterval(contadorDeHoras);
        document.getElementById('contador').innerHTML = "Evento Finalizado"
    }
}, 1000)