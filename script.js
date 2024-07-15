var segundos = 0;
var minutos = 0;
var horas = 0;
var intervalo


function iniciar(){
    //chama a função contador a cada 1s (1000ms)
     intervalo = setInterval(cronometro,1000)
}

function pausar(){
    //pausa o tempo do cronômetro quando chama a função intervalo
    clearInterval(intervalo)
}

function zerar(){
    clearInterval(intervalo)
    document.getElementById('relogio').innerText = "00:00:00"
    intervalo=0;
}

function cronometro(){
    segundos++
    if(segundos == 60){
        minutos++
        segundos=0
    }

    if(minutos == 60){
        horas++
        minutos=0
    }
    

    
    document.getElementById('relogio').innerText = horas + ":" + minutos + ":" + segundos

}

function formatar(){
    if(segundos <10){
        segundos = "0" + segundos
    }
   
    if(minutos <10){
        minutos = "0" + minutos
    }

    if(horas <10){
        horas = "0" + horas
    }
}