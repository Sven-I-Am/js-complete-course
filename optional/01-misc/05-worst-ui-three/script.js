/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    /*FUNCTIONS*/
    //write to target
    function writeToTarget() {
        document.getElementById("target").innerText = "0"
            + document.getElementById("part-one").value
            + document.getElementById("part-two").value
            + document.getElementById("part-three").value
            + document.getElementById("part-four").value;
    }
    //Stop the slots

    function stop1() {
        clearInterval(speed1);
    }

    function stop2() {
        clearInterval(speed2);
    }

    function stop3() {
        clearInterval(speed3);
    }

    function stop4() {
        clearInterval(speed4);
    }

    //the prefix 04XX .. .. ..

    function slots1() {
        if (currentValue1 <= maxValue1) {
            document.getElementById("part-one").value = currentValue1;
            currentValue1++;
        }
        if (currentValue1 == maxValue1) {
            currentValue1 = minValue1;
        }
        writeToTarget();
    }

    //digits 04.. XX .. ..

    function slots2() {
        if (currentValue2 <= maxValue2) {
            document.getElementById("part-two").value = currentValue2;
            currentValue2++;
        }
        if (currentValue2 == maxValue2) {
            currentValue2 = minValue2;
        }
        writeToTarget();
    }

    //digits 04.. .. XX ..

    function slots3() {
        if (currentValue3<= maxValue3) {
            document.getElementById("part-three").value = currentValue3;
            currentValue3++;
        }
        if (currentValue3 == maxValue3) {
            currentValue3 = minValue3;
        }
        writeToTarget();
    }

    //digits 04.. .. .. XX

    function slots4() {
        if (currentValue4<= maxValue4) {
            document.getElementById("part-four").value = currentValue4;
            currentValue4++;
        }
        if (currentValue4 == maxValue4) {
            currentValue4 = minValue4;
        }
        writeToTarget();
    }

    /*VARIABLES*/
    //declaring min, max and current values. Declaring speed values for slots function

    let minValue1 = Number(document.getElementById("part-one").getAttribute("data-min"));
    let minValue2 = Number(document.getElementById("part-two").getAttribute("data-min"));
    let minValue3 = Number(document.getElementById("part-three").getAttribute("data-min"));
    let minValue4 = Number(document.getElementById("part-four").getAttribute("data-min"));

    let maxValue1 = Number(document.getElementById("part-one").getAttribute("data-max"));
    let maxValue2 = Number(document.getElementById("part-two").getAttribute("data-max"));
    let maxValue3 = Number(document.getElementById("part-three").getAttribute("data-max"));
    let maxValue4 = Number(document.getElementById("part-four").getAttribute("data-max"));

    let currentValue1 = minValue1;
    let currentValue2 = minValue2;
    let currentValue3 = minValue3;
    let currentValue4 = minValue4;

    //just some fun with random intervals

    let interval1 = Math.floor(Math.random() * 100) + 50;
    let interval2 = Math.floor(Math.random() * 100) + 50;
    let interval3 = Math.floor(Math.random() * 100) + 50;
    let interval4 = Math.floor(Math.random() * 100) + 50;

    let speed1 = setInterval(slots1, interval1);
    let speed2 = setInterval(slots2, interval2);
    let speed3 = setInterval(slots3, interval3);
    let speed4 = setInterval(slots4, interval4);

    /*BUTTONS*/
    //adding eventListeners to the buttons

    document.getElementById("fix-part-one").addEventListener("click", function () {
        stop1();
    });

    document.getElementById("fix-part-two").addEventListener("click", function () {
        stop2();
    });


    document.getElementById("fix-part-three").addEventListener("click", function () {
        stop3();
    });

    document.getElementById("fix-part-four").addEventListener("click", function () {
        stop4();
    });

})()