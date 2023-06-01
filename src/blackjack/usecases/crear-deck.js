import _ from 'underscore';

// export const miNombre = 'José';

// const crearDeck = (tiposDeCarta, tiposEspeciales) => { esta es la de default, no se precede con la palabra reservada export

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} regresa un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if (!tiposDeCarta || tiposDeCarta.length === 0) throw new Error('TiposdeCarta es obligatorio como un arreglo de string');
    if (!tiposEspeciales || tiposEspeciales.length === 0) throw new Error('tiposEspeciales es obligatorio como un arreglo de string');

    let deck = [];
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCarta) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tiposDeCarta) {
        for (let esp of tiposEspeciales) {
            deck.push(esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}

// export default crearDeck; // esta exportacion indica que no es necsario hacer la deconstruccion y se puede usar cualquiernombre para llamarlo
//  Se puede tener solo una de DEFAULT