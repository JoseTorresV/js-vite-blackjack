// Esta función me permite tomar una carta

/**
 * Esta funcion pide una carta del deck
 * @param {Array<String>} deck 
 * @returns {String} Esta funcion regresa la carta que tomamos del deck
 */
export const pedirCarta = (deck) => {
    
    if (!deck || deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}