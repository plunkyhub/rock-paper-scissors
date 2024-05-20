//apuntar a los botones
const piedra = document.querySelector("#piedra");
const papel = document.querySelector("#papel");
const tijera = document.querySelector("#tijera");
//opcion empate
const empate = document.querySelector(".empate");
//Apuntar a los selectores de eleccion
const eleccionJugador = document.querySelector(".eleccionJugador");
const eleccionPc = document.querySelector(".eleccionPc");
//Mostrar puntuacion jugador y computadora
const jugadorPuntos = document.querySelector("#jugadorPuntos");
jugadorPuntos.textContent = 0;
const pcPuntos = document.querySelector("#pcPuntos");
pcPuntos.textContent = 0;
//crear funcion de opcion que devolvera la computadora.
const getComputerChoice = () => {
  if (Math.floor(Math.random() * 3) === 1) {
    return "piedra";
  } else if (Math.floor(Math.random() * 3) === 2) {
    return "papel";
    } else {
    return "tijera";
    }
};
// Crear funcion playRound para comparar la desicion de player contra computer y asignar puntuacion al ganador
const playRound = (playerSelection, computerSelection) => {
playerSelection.toLowerCase();
if (playerSelection === computerSelection) {
    jugadorPuntos.textContent = player;
    pcPuntos.textContent = computer;
    empate.textContent = "Igual";
    if (computerSelection == "piedra") {
        eleccionJugador.textContent = piedra.textContent; //aqui se le asigna el texto de la tijera
        eleccionPc.textContent = piedra.textContent;
    } else if (computerSelection == "papel") {
        eleccionJugador.textContent = papel.textContent; //aqui se le asigna el texto de la tijera
        eleccionPc.textContent = papel.textContent;
    } else if (computerSelection == "tijera") {
        eleccionJugador.textContent = tijera.textContent; //aqui se le asigna el texto de la tijera
        eleccionPc.textContent = tijera.textContent;
    }
    } else if (playerSelection === "tijera" && computerSelection === "papel") {
    player++;
    jugadorPuntos.textContent = player;
    eleccionJugador.textContent = tijera.textContent;
    eleccionPc.textContent = papel.textContent;
    empate.textContent = "";
    } else if (playerSelection === "papel" && computerSelection === "piedra") {
    player++;
    jugadorPuntos.textContent = player;
    eleccionJugador.textContent = papel.textContent;
    eleccionPc.textContent = piedra.textContent;
    empate.textContent = "";
    } else if (playerSelection === "piedra" && computerSelection === "tijera") {
    player++;
    jugadorPuntos.textContent = player;
    eleccionJugador.textContent = piedra.textContent;
    eleccionPc.textContent = tijera.textContent;
    empate.textContent = "";
    } else {
    empate.textContent = "";
    if (computerSelection == "piedra") {
        eleccionJugador.textContent = tijera.textContent; //aqui se le asigna el texto de la tijera
        eleccionPc.textContent = piedra.textContent;
    } else if (computerSelection == "papel") {
        eleccionJugador.textContent = piedra.textContent; //aqui se le asigna el texto de la tijera
        eleccionPc.textContent = papel.textContent;
    } else if (computerSelection == "tijera") {
        eleccionJugador.textContent = papel.textContent; //aqui se le asigna el texto de la tijera
        eleccionPc.textContent = tijera.textContent;
    }
    computer++;
    pcPuntos.textContent = computer;
}
};
//crear una funcion play para jugar 5 rondas y asignar pintuacion a player o a computer segun quien gane.

const game = (play) => {
    playRound(play, getComputerChoice());
    if (player == 5) {
        empate.innerHTML = '<a href="index.html">Ganaste!. Jugar Otra Vez?\n Click Aqui</a>';
    } else if (computer == 5) {
        empate.innerHTML = '<a href="index.html">Perdiste. Jugar Otra Vez?\n Click Aqui</a>';
    }
}