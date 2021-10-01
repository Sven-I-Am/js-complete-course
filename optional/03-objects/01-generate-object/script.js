/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let me = {
        lastname: 'Vander Mierde',
        firstname: 'Sven',
        age: 37,
        city: 'Antwerp',
        country: 'Belgium'
    }

    document.getElementById('run').addEventListener('click', function (){
        console.table(me);
    })
})();
