# READ IT
## EX 09
* Notice how the 2 map functions are attached to eachother, this is called 'method chaining'
  * in steps:
    1. run parseTitle function on whole array
    2. run wrapWithTag on whole array
    3. join all elements of array without separator
* What does the parseTitle function do exactly?
  * in steps
    1. set all elements to lower case
    2. check if element starts with "the"
    3. log title to console `console.log(`Film met THE:`, title);`
    4. if title starts with the: set title to upper case
* Notice how all the code is in the shape of functions.
  * by calling the createList() function in this line:<br>
    `document.write(createList(movies));`<br>
    it in turn calls on the other functions to render the list as requested.