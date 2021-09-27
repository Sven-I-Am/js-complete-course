# READ IT
## EX 13
* Examine the parseMovieData function. What has changed? Why aren't we using forEach here? 
  * we are using the for(...in...) statement<br>
`
for (const prop in movie) { 
result += wrapWithTag(movie[prop], 'p');
}
`
* Look at the documentation of for...in
  * https://www.w3schools.com/jsref/jsref_forin.asp
* Look at the documentation of the .sort() function. Explain how it's applied here.
  * https://www.w3schools.com/js/js_array_sort.asp
    1. the `.sort(orderByYear)` calls the `sortByYear()` function
    2. the `sortByYear()` function provides a compare function to avoid errors when sorting
* Notice the 2 console.table() functions. Go back to exercise 10 and console.log the movies array  before and after the createList function. What's the difference? Can you explain why there is a difference?
  * in exercise 10 the `movies[]` array remains unchanged while in this exercise the .sort() method is called on the array.