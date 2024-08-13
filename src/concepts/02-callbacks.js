import { heroes } from '../data/heroes';


/**
 * 
 * @param { HTMLDivElement } element 
 */
export const callbacksComponent = ( element ) => {
    
    console.log( `callbacksComponent` );

    const id1 = '5d86371f9f80b591f499df32';
    const id2 = '5d86371fd55e2e2a30fe1ccb2';

    findHeroes( id1, ( error, heroObject1 ) => {
        
        if ( error ) {
            element.innerHTML = error;
            return;
        }

        //! Callback Hell -> avoid it.
        findHeroes( id2, ( error, heroObject2 ) => {
            if ( error ) {
                element.innerHTML = error;
                return;
            }

            element.innerHTML = `${ heroObject1.name } / ${ heroObject2.name }`;

        })

        // element.innerHTML = heroObject?.name;

    });

}

/**
 * 
 * @param { String } id 
 * @param { ( error?: Stirng, hero: Object ) => void } callback 
 */
const findHeroes = ( id, callback ) => {
    
    const hero = heroes.find( hero => hero.id === id );

    if ( !hero ) {
        callback( `Hero with id ${ id } not found` );
        return;
    }

    callback( null, hero );

}