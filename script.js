function cronometrar(){
    var display = document.querySelector('.display')

    var agora = new Date();
    var horario = agora.getHours() + ':' + agora.getMinutes() + ':' + agora.getSeconds()

    display.textContent = horario

}

function corrigirHorario(numero){
    if(numero < 10){
        numero = '0' + numero
    }
}

setInterval(cronometrar, 1000)