var segundos = 0;
var minutos = 0;
var horas = 0;
var intervalo


function iniciar(){

    cronometro()
    //chama a função contador a cada 1s (1000ms)
     intervalo = setInterval(cronometro,1000)

     document.querySelector('.iniciar').disabled = true;

     //desabilita o botão iniciar após clicar 1x nele
}

function pausar(){
    //pausa o tempo do cronômetro quando chama a função intervalo
    clearInterval(intervalo)

    //habilita o botão iniciar após clicar no pause
    document.querySelector('.iniciar').disabled = false;
}

function zerar(){
    clearInterval(intervalo)
    minutos = segundos = horas = 0
    document.getElementById('relogio').innerText = "00:00:00"
    intervalo=0;

    //habilita o botão iniciar após clicar no zerar
    document.querySelector('.iniciar').disabled = false;
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