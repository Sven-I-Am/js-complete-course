# READ IT
## EX 14
* Look at the reduce() function and research how it works exactly.
  * https://www.w3schools.com/jsref/jsref_reduce.asp
* Notice the ', 0' in the reduce function. Inspect the result when you omit this. Explain the difference.
  * if we remove it the output is `Total capacity: [object Object]250150100`
  * by putting , 0 in the reduce function the value of total is assigned as a number and can thus be calculated as a number instead of a string
* What are we doing with the object that's passed to 'calculateAvailable'?
  * we are adding a property of available to the object theatre and calculating its value
