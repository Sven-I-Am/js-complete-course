/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    //declare two operands and set default value to zero
    let o1 = 0;
    let o2 = 0;
    let result = 0;

    document.getElementById("addition").addEventListener("click", function() {
         // perform an addition
        o1 = parseInt(document.getElementById('op-one').value);
        o2 = parseInt(document.getElementById('op-two').value);
        result = o1 + o2;
        alert(o1 + ' + ' + o2 + ' = ' + result);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        o1 = parseInt(document.getElementById('op-one').value);
        o2 = parseInt(document.getElementById('op-two').value);
        result = o1 - o2;
        alert(o1 + ' - ' + o2 + ' = ' + result);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        o1 = parseInt(document.getElementById('op-one').value);
        o2 = parseInt(document.getElementById('op-two').value);
        result = o1 * o2;
        alert(o1 + ' * ' + o2 + ' = ' + result);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        o1 = parseInt(document.getElementById('op-one').value);
        o2 = parseInt(document.getElementById('op-two').value);
        result = o1 / o2;
        alert(o1 + ' / ' + o2 + ' = ' + result);
    });
})();
