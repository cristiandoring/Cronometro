var segundos = 0;
var minutos = 0;
var milisegundos = 0;
var intervalo


function iniciar(){
    //chama a função contador a cada 0.1s (100ms)
     intervalo = setInterval(cronometro,100)
}

function pausar(){
    //pausa o tempo do cronômetro quando chama a função intervalo
    clearInterval(intervalo)
}

function zerar(){
    document.getElementById('relogio').innerText = "00:00:00"
    intervalo=0;
}

function cronometro(){
    milisegundos++
    if(milisegundos == 60){
        segundos++
        milisegundos=0
    }

    if(segundos == 60){
        minutos++
        segundos=0
    }
    

    
    document.getElementById('relogio').innerText = minutos + ":" + segundos + ":" + milisegundos

}

function formatar(){
    if(milisegundos <10){
        milisegundos = "0" + milisegundos
    }
   
    if(segundos <10){
        segundos = "0" + segundos
    }

    if(minutos <10){
        minutos = "0" + minutos
    }
}