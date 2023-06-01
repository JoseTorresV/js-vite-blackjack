import { crearCartaHTML } from "./crear-carta-html";
import { pedirCarta } from "./pedir-carta";
import { valorCarta } from "./valor-carta";

/**
 * Turno de la computadora
 * @param {Number} puntosDelJugador Puntos que hace el jugador
 * @param {HTMLElement} puntosHTML Elemento HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora Elemento HTML para mostrar las cartas
 * @param {Array<String>} deck
 */
export const turnoComputadora = (puntosDelJugador, puntosHTML, divCartasComputadora, deck = []) => {

    if (!puntosDelJugador) throw new Error('Puntos del jugador son necesarios');
    if (!puntosHTML) throw new Error('Argument puntosHTML es necesario');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML.innerText = puntosComputadora;

        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append(imgCarta);

        if (puntosDelJugador > 21) {
            break;
        }

    } while ((puntosComputadora < puntosDelJugador) && (puntosDelJugador <= 21));

    setTimeout(() => {
        if (puntosComputadora === puntosDelJugador) {
            alert('Nadie gana :(');
        } else if (puntosDelJugador > 21) {
            alert('Computadora gana')
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100);
}