var segundos = 0;
var minutos = 0;
var horas = 0;
var intervalo


function iniciar(){
    //chama a função contador a cada 1s (1000ms)
     intervalo = setInterval(cronometro,0.001)
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
    

    
    document.getElementById('relogio').innerText = formatar(horas) + ":" + formatar(minutos) + ":" + formatar(segundos)

}

function formatar(digito){
    if(digito <10){
        return("0" + digito)
    }
    else{
        return(digito)
    }
   
}