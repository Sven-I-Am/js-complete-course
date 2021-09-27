# READ IT
## Excercise 05
* The for-loop is no longer present. 
  What was it replaced with? How does this work?
  * the array.forEach() method
  * https://www.w3schools.com/jsref/jsref_foreach.asp
* What does the function 'parseTitle' do? 
  * every time the `movies.forEach()` method is passed it takes the called element of the array and rewrites the string in all lower case, <br>
  it then wraps that title in the `<li></li>` tags
* What parameter do we pass to this function?
  * we pass the parameter `(movie)` to this function, <br>
  which is each element of the array `movies[]`one at a time.
* What does the function 'wrapWithTag' do? 
  * it wraps `const lowerTitle` with the tags `<li></li>`
* Why are the parameters placed between brackets?
  * they are the function parameters, their value is declared later in the code when we call the function <br>
  `const wrapped = wrapWithTag(lowerTitle, `li`);`