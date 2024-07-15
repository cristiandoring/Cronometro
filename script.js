var segundos = 0;
var minutos = 0;
var milisegundos = 0;


function iniciar(){
    //chama a função contador a cada 0.1s (100ms)
    setInterval(cronometro,100)
}

function pausar(){
    console.log("pausando...")
}

function zerar(){
    console.log("zerando...")
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