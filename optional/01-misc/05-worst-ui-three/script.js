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
    //write to target
    function writeToTarget() {
        document.getElementById("target").innerText = "0"
            + document.getElementById("part-one").value
            + document.getElementById("part-two").value
            + document.getElementById("part-three").value
            + document.getElementById("part-four").value;
    }

//the prefix 04XX .. .. ..

    let minValue1 = Number(document.getElementById("part-one").getAttribute("data-min"));
    let maxValue1 = Number(document.getElementById("part-one").getAttribute("data-max"));
    let currentValue1 = minValue1;
    let speed1 = setInterval(slots1, 100);

    document.getElementById("fix-part-one").addEventListener("click", function () {
        stop1();
    });

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

    function stop1() {
        clearInterval(speed1);
    }

//digits 04.. XX .. ..

    let minValue2 = Number(document.getElementById("part-two").getAttribute("data-min"));
    let maxValue2 = Number(document.getElementById("part-two").getAttribute("data-max"));
    let currentValue2 = minValue2;
    let speed2 = setInterval(slots2, 100);

    document.getElementById("fix-part-two").addEventListener("click", function () {
        stop2();
    });

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

    function stop2() {
        clearInterval(speed2);
    }

//digits 04.. .. XX ..

    let minValue3 = Number(document.getElementById("part-three").getAttribute("data-min"));
    let maxValue3 = Number(document.getElementById("part-three").getAttribute("data-max"));
    let currentValue3 = minValue3;
    let speed3 = setInterval(slots3, 100);

    document.getElementById("fix-part-three").addEventListener("click", function () {
        stop3();
    });

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

    function stop3() {
        clearInterval(speed3);
    }

//digits 04.. .. .. XX

    let minValue4 = Number(document.getElementById("part-four").getAttribute("data-min"));
    let maxValue4 = Number(document.getElementById("part-four").getAttribute("data-max"));
    let currentValue4 = minValue4;
    let speed4 = setInterval(slots4, 100);

    document.getElementById("fix-part-four").addEventListener("click", function () {
        stop4();
    });

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

    function stop4() {
        clearInterval(speed4);
    }

})()