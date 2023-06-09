
var ho = document.getElementById('horas')
var mi = document.getElementById('minutos')
var se = document.getElementById('segundos')

let atualizar= setInterval(function time(){
    var dataAtual = new Date();
    var h = dataAtual.getHours();
    var m = dataAtual.getMinutes();
    var s = dataAtual.getSeconds();
   

    if( h<10)  h = "0"+ h;
    
    if( m< 10) m = '0' + m;

    if( s<10) s = "0"+ s;
     
    
    ho.innerHTML = h;
    mi.innerHTML = m;
    se.innerHTML = s;
})

function trocarCor() {
    
    var corpo = document.querySelector("body")
    var troca = corpo.style.backgroundImage
    var corAtual = window.getComputedStyle(corpo).backgroundImage;
    var cor = 0
  
    let cor1 = "linear-gradient(339deg, rgb(0, 255, 23), rgb(87, 0, 255))"
    let cor2 = "linear-gradient(339deg, rgb(87, 0, 255), rgb(0, 255, 23))"

    if(corAtual==="linear-gradient(339deg, rgb(0, 255, 23), rgb(87, 0, 255))"){
        cor = cor2
    }if(corAtual=== "linear-gradient(339deg, rgb(87, 0, 255), rgb(0, 255, 23))"){
        cor = cor1
    }
    


    
    corpo.style.backgroundImage = cor

    // alert(corAtual)
    
}