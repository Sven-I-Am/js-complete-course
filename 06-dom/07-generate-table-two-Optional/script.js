/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let table = document.createElement("table");

    for (let r=0; r<10;r++){
        let row = table.insertRow(r);
        for (let c=0; c<10; c++){
            let cell = row.insertCell(c);
            cell.innerHTML = (r+1) + ' * ' + (c+1) + ' = ' + (r+1) * (c+1);
        }

    }

    let target = document.getElementById("target");
    target.appendChild(table);

})();
