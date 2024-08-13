

/**
 * 
 * @param { HTMLDivElement } element 
 */
export const asyncAwait2Component = async ( element ) => {
    
    console.time( 'Start' );

    //* Aplica solo a promesas que no son secuenciales, es decir, que no codependencia entre ellas.
    // const value1 = await slowPromise();
    // const value2 = await mediumPromise();
    // const value3 = await fastPromise();

    const [ value1, value2, value3 ] = await Promise.all([
        slowPromise(),
        mediumPromise(),
        fastPromise(),
    ]);

    element.innerHTML = `
        value 1: ${ value1 } </br>
        value 2: ${ value2 } </br>
        value 3: ${ value3 } </br>
    `;

    console.timeEnd( 'Start' );

}

const slowPromise = () => new Promise( resolve => {
    
    setTimeout(() => {
        resolve( 'Slow Promise' );
    }, 2000);

});

const mediumPromise = () => new Promise( resolve => {
    
    setTimeout(() => {
        resolve( 'Medium Promise' );
    }, 1500);

});

const fastPromise = () => new Promise( resolve => {
    
    setTimeout(() => {
        resolve( 'Fast Promise' );
    }, 1000);

});