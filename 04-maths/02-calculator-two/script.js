/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    let performOperation = function(operation) {
        // perform the operation
        let o1 = parseInt(document.getElementById('op-one').value);
        let o2 = parseInt(document.getElementById('op-two').value);
        let result = 0;

        switch (operation) {
            case 'addition':
                result = o1 + o2;
                alert(o1 + ' + ' + o2 + ' = ' + result);
                break;
            case 'substraction':
                result = o1 - o2;
                alert(o1 + ' - ' + o2 + ' = ' + result);
                break;
            case 'multiplication':
                result = o1 * o2;
                alert(o1 + ' * ' + o2 + ' = ' + result);
                break;
            case 'division':
                result = o1 / o2;
                alert(o1 + ' / ' + o2 + ' = ' + result);
                break;
            default:
                alert ('Something went wrong, please try again.');
                break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();
