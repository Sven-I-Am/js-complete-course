/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

   document.getElementById('run').addEventListener('click', function (){
       const birthDay = document.getElementById('dob-day').value;
       const birthMonth = document.getElementById('dob-month').value;
       const birthYear = document.getElementById('dob-year').value;
       function calculate_age(dob) {
           const diff_ms = Date.now() - dob.getTime();
           const age_dt = new Date(diff_ms);

           return Math.abs(age_dt.getUTCFullYear() - 1970); /*subtract 1970 because the .getTime() method returns the number of Milliseconds since jan 1st 1970 */
       }

       alert('You are ' + calculate_age(new Date(birthYear, birthMonth, birthDay)) + ' years old.');

   })

})();
