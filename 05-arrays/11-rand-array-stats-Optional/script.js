/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById('run').addEventListener('click', function (){
        //populate an array of ten elements with random numbers between 1 and 100
        let numbers =[];
        for (let i = 0; i<10 ;i++){
            numbers[i] = Math.floor(Math.random() * 101);
        }

        //display those numbers in their proper cell
        document.getElementById("n-1").innerText = (numbers[0]);
        document.getElementById("n-2").innerText = (numbers[1]);
        document.getElementById("n-3").innerText = (numbers[2]);
        document.getElementById("n-4").innerText = (numbers[3]);
        document.getElementById("n-5").innerText = (numbers[4]);
        document.getElementById("n-6").innerText = (numbers[5]);
        document.getElementById("n-7").innerText = (numbers[6]);
        document.getElementById("n-8").innerText = (numbers[7]);
        document.getElementById("n-9").innerText = (numbers[8]);
        document.getElementById("n-10").innerText = (numbers[9]);

        //get smallest number and display it
        let smallest = Math.min(...numbers);
        document.getElementById("min").innerHTML = (smallest);

        //get largest number and display it
        let largest = Math.max(...numbers);
        document.getElementById("max").innerHTML = (largest);

        //get sum of all numbers and display it
        let sum = numbers.reduce(function(a, b){
            return a+b;
        }, 0);
        document.getElementById("sum").innerHTML = (sum);

        //get average of all numbers and display it
        let average = sum / numbers.length;
        document.getElementById('average').innerHTML = (average);

        console.log (numbers);
    })

})();
