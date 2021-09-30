/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    // functions to call
    function plusOnClick(current, low, high){
        let number;
        if(current < high){
            number = current +1;
        } else {
            number = low;
        }
        if(number < 10){
            number = "0" + number;
        }
        else{
            number.toString();
        }
        return number;
    }

    function updateTarget(){
        let number = ""
        buttonInfo.forEach(function(button){
            number += button.innerText;
        })

        target.innerText = '+' + number;
    }


    //declaring base variables, selecting the buttons on the page and adding an eventlistener to EACH of them
    let buttonInfo = []; //array to store all the information stored in the html for the buttons - can then be called on like an array of objects
    let target = document.getElementById("target");

    document.querySelectorAll("button").forEach(function(button){
        buttonInfo.push(button);

        button.addEventListener("click", () => //Make button clickable
        {
            let currentValue = parseInt(button.innerText);
            let lowestValue = parseInt(button.dataset.min);
            let highestValue = parseInt(button.dataset.max);

            button.innerText = plusOnClick(currentValue, lowestValue, highestValue).toString(); //every time the user clicks a button, the inner text gets updated

            updateTarget() //once the text of the button has changed, the target gets updated with the latest information

        });
    });

})();
