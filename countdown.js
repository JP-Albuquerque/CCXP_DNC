const inDia = document.getElementById("inDia");
const inHora = document.getElementById("inHora");
const inMinuto = document.getElementById("inMinuto");
const inSegundo = document.getElementById("inSegundo");

const lancamento = "30 nov 2023";

function contagemRegressiva(){
    const dataLancamento = new Date(lancamento);
    const hoje = new Date();

    const totalSegundos = (dataLancamento - hoje)/1000;

    const finalDias = Math.floor(totalSegundos / 60 / 60 / 24);
    const finalHoras = Math.floor(totalSegundos / 60 / 60) % 24;
    const finalMinutos = Math.floor(totalSegundos / 60) % 60;
    const finalSegundos = Math.floor(totalSegundos) % 60;

    inDia.innerHTML = finalDias+"D";
    inHora.innerHTML = formatoTempo(finalHoras)+"H";
    inMinuto.innerHTML = formatoTempo(finalMinutos)+"M";
    inSegundo.innerHTML = formatoTempo(finalSegundos)+"S";
}

function formatoTempo(tempo){
    return tempo <10? `0${tempo}` : tempo;
}

contagemRegressiva();
setInterval(contagemRegressiva, 1000);