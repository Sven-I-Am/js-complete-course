/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById('run').addEventListener('click', function (){
        async function getAPI (){
            let api = await fetch('http://localhost:3000/heroes');
            let heroesAray = await api.json();
            let heroID = parseInt(document.getElementById('hero-id').value);
            if (heroID <= heroesAray.length){
                for (let i = 0; i < heroesAray.length; i++) {
                    if (heroesAray[i].id == heroID){
                        heroesAray.splice(i,1);
                        console.log(heroesAray);
                    }
                }
            } else {
                console.error ('please enter a valid id.');
            }

        }

        getAPI();
    })
})();
