/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let age = prompt("How old are you?");
    let gender = prompt("What is your gender?");
    let town = prompt("Where are you from?");

    if (confirm("You are " + age + " old. You are " + gender + " and you live in " + town + ". Is that correct?")) {
        alert("thank you!");
    } else {
        age = prompt("How old are you?");
        gender = prompt("What is your gender?");
        town = prompt("Where are you from?");
        if (confirm("You are " + age + " old. You are " + gender + " and you live in " + town + ". Is that correct?")) {
            alert("thank you!");
        } else {
            age = prompt("How old are you?");
            gender = prompt("What is your gender?");
            town = prompt("Where are you from?");
            if (confirm("You are " + age + " old. You are " + gender + " and you live in " + town + ". Is that correct?")) {
                alert("thank you!");
            } else {
                alert('3 times is the charm! No more chances!');
            }
        }
    }

})();
