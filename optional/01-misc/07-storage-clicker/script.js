/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    if(typeof(Storage) !== "undefined") {
        document.getElementById('increment').addEventListener('click', function () {
            if (localStorage.clickcount) {
                localStorage.clickcount = Number(localStorage.clickcount) + 1;
            }
            document.getElementById("target").innerHTML = localStorage.clickcount;
        })
        document.getElementById('reset').addEventListener('click', function(){
            localStorage.clickcount = 0;
            document.getElementById("target").innerHTML = localStorage.clickcount;
        })
        document.getElementById("target").innerHTML = localStorage.clickcount;
    }else
        {
            document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
        }


})();
