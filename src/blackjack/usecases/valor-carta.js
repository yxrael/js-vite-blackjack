/**
 * Obtener valor de la carta
 * @param {String} carta 
 * @returns {Number} que es el valor de la carta
 */

export const valoraCarta = ( carta ) => {

    if ( !carta ) {
        throw new Error('No se ha recibido una carta');
    }

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}