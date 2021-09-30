/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById('run').addEventListener('click', function (){
        async function getAPI (){
            let api = await fetch('http://localhost:3000/heroes');
            let heroesAray = await api.json();
            let heroID = parseInt(document.getElementById('hero-id').value);
            let target = document.getElementById("target");

            for (let i = 0; i < heroesAray.length; i++) {
                let xmen = document.getElementById('tpl-hero').content.cloneNode(true); //clone template tag structure to xmen

                if (heroesAray[i].id == heroID){
                    let list = heroesAray[i];

                    xmen.querySelector('.name').innerText = list.name;
                    xmen.querySelector('em.alter-ego').innerText = list.alterEgo;
                    xmen.querySelector('.powers').innerText = list.abilities;

                    target.appendChild(xmen);
                }

            }
        }

        getAPI();
    })

})();
