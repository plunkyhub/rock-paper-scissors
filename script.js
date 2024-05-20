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