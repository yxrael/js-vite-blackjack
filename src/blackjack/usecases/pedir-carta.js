/**
 * Extrae una carta de las restantes en el deck
 * @param {array<string>} deck 
 * @returns {<string>}
 */

export const pideCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;

}