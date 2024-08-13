import { heroes } from '../data/heroes.js';

/**
 * 
 * @param { HTMLDivElement } element 
 */
export const promiseComponent = ( element ) => {
    
    /**
     * 
     * @param { Object } hero Heroes Object.
     */
    const renderHero = ( hero ) => {
        element.innerHTML = hero.name;
    }

    const renderTwoHeroes = ( hero1, hero2 ) => {
        
        element.innerHTML = `
            <h3>${ hero1.name }</h3>
            <h3>${ hero2.name }</h3>
        `;

    }

    const renderError = ( error ) => {
        element.innerHTML = `
            <h1>Error:</h1>
            <h3>${ error }</h3>
        `;
    }

    const id1 = '5d86371f2343e37870b91ef1';
    const id2 = '5d86371f1efebc31def272e2';

    // findHero( id1 )
    // // .then( superHero => renderHero( superHero ) );
    // .then( renderHero ) // It a short way from above sintaxis.
    // .catch( renderError );

    //! Promise Hell -> avoid it.
    //* Forma 1 //
    // findHero( id1 )
    // .then( hero1 => {

    //     findHero( id2 )
    //     .then( hero2 => {
    //         renderTwoHeroes( hero1, hero2 );
    //     })
    //     .catch( renderError );

    // })
    // .catch( renderError );

    //* Forma 2 //
    // let hero1;
    // findHero( id1 )
    // .then( hero => {
        
    //     hero1 = hero;
    //     return findHero( id2 );

    //     }).then( hero2 => {
    //         renderTwoHeroes( hero1, hero2 );
    // })
    // .catch( renderError );


    // aplicable para promesas que sean independientes, es decir que el resultado de los callbacks o promises no dependan para realizar la siguiente funcion. Ademas que todas las promesas se resuelvan antes de saltar al then.
    Promise.all([
        findHero( id1 ),
        findHero( id2 )
    ])
    .then( ([ hero1, hero2 ]) => renderTwoHeroes( hero1, hero2 ) )
    .catch( renderError );

}

/**
 * 
 * @param { String } id 
 * @returns { Promise }
 */
const findHero = ( id ) => {

    return new Promise((resolve, reject) => {
        
        const hero = heroes.find( hero => hero.id === id );

        if ( hero ) {
            resolve( hero );
            return;
        }

        reject( `Hero with id ${ id } not found` );

    });

}