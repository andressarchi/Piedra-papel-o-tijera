let puntoUsuario = 0;
let puntoPc = 0;

let instrucciones = document.querySelector("#instrucciones");
let contenedorPuntoUsuario = document.querySelector("#puntos-usuario");
let contenedorPuntosPc = document.querySelector("#puntos-computadora");
let mensaje = document.querySelector("#mensaje");
let contadorGanaPunto = document.querySelector("#gana-punto");
let eligeTuArma=document.querySelector("#elegir-opcion");
let reiniciar = document.querySelector("#reiniciar")

let contenedorEleccionUsuario = document.querySelector("#eleccion-usuario");
let contenedorEleccionPc = document.querySelector("#eleccion-computadora")

let botonArmas =document.querySelectorAll(".arma")
botonArmas.forEach(boton=>{
    boton.addEventListener("click",iniciarTurno)
})

function iniciarTurno(e) {//se llama al evento 
    let eleccionPc = Math.floor(Math.random()*3);
    let eleccionUsuario = e.currentTarget.id;//devuelve el id de el elmento al que se le hizo click
    
    //piedra => 0
    //papel => 1
    //tijera => 2

    if (eleccionPc == 0) {
        eleccionPc = "piedra🏔"
    }else if(eleccionPc == 1){
        eleccionPc = "papel📃"
    }else{
        eleccionPc= "tijera✂"
    }
    
    if (
        (eleccionUsuario === "tijera✂" && eleccionPc === "papel📃")||
        (eleccionUsuario === "papel📃" && eleccionPc === "piedra🏔")||
        (eleccionUsuario === "piedra🏔" && eleccionPc === "tijera✂")
    ){
        ganaUsuario()
    }else if (
        (eleccionPc === "tijera✂" && eleccionUsuario === "papel📃") ||
        (eleccionPc === "papel📃" && eleccionUsuario === "piedra🏔") ||
        (eleccionPc=== "piedra🏔" && eleccionUsuario === "tijera✂")
    ){
        ganaPc()
    }else{
        empate()
    }
    mensaje.classList.remove("disabled")
    contenedorEleccionUsuario.innerText = eleccionUsuario;
    contenedorEleccionPc.innerText = eleccionPc;

    if (puntoUsuario === 5 || puntoPc === 5) {
        if (puntoUsuario === 5) {
            instrucciones.innerText ="🔥¡Ganaste el juego!🔥"
        }
        if (puntoPc === 5) {
            instrucciones.innerText="El pc gano el juego😭"
        }
        eligeTuArma.classList.add("disabled")
        reiniciar.classList.remove("disabled")
        reiniciar.addEventListener("click",reiniciarJuego)
    }
}

function ganaUsuario() {
    puntoUsuario++;
    contenedorPuntoUsuario.innerText = puntoUsuario;
    contadorGanaPunto.innerText = "Ganaste un punto 🤩";
}
function ganaPc() {
    puntoPc++;
    contenedorPuntosPc.innerText= puntoPc;
    contadorGanaPunto.innerText="la pc gana un punto 😭"
}
function empate() {
    contadorGanaPunto.innerText="Quedaron empatados 😰"
}

function reiniciarJuego() {
    puntoPc=0;
    puntoUsuario=0;
    contenedorPuntosPc.innerText= puntoPc;
    contenedorPuntoUsuario.innerText = puntoUsuario;
    eligeTuArma.classList.remove("disabled");
    mensaje.classList.add("disabled");
    instrucciones.innerText="el primero en llegar a 5 puntos gana";
    reiniciar.classList.add("disabled")
}