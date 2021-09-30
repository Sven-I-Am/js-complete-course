/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    /*
    document.getElementById('hero-name').setAttribute('required');
    document.getElementById('hero-alter-ego').setAttribute('required');
    document.getElementById('hero-powers').setAttribute('required');
    */

    document.getElementById('run').addEventListener('click', function(){
        async function getAPI () {
            let api = await fetch('http://localhost:3000/heroes');
            let heroesArray = await api.json();

            let heroName = document.getElementById('hero-name').value;
            let heroAlter = document.getElementById('hero-alter-ego').value;
            let heroPower = document.getElementById('hero-powers').value;

            if (heroName == '' || heroAlter == '' || heroPower == '') {
                console.log('Please fill in all fields');
            } else {
                let newHero = {
                    id: heroesArray.length+1,
                    name: heroName,
                    alterEgo: heroAlter,
                    abilities: heroPower.split(', ')
                }
                heroesArray.push(newHero);
                console.table(heroesArray);
            }
        }
        getAPI();
    })
})();
