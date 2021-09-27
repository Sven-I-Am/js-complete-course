/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    const today = new Date();
    let weekday= '';
    let day = today.getDay();
    let date = today.getDate();
    let monthNumber = today.getMonth();
    let month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let year = today.getFullYear();
    let time = today.getHours() + ':' + today.getMinutes();
        switch (day) {
            case 0:
                weekday = "Sunday";
                break;

            case 1:
                weekday = "Monday";
                break;

            case 2:
                weekday = "Tuesday";
                break;

            case 3:
                weekday = "Wednesday";
                break;

            case 4:
                weekday = "Thursday";
                break;

            case 5:
                weekday = "Friday";
                break;

            case 6:
                weekday = "Saturday";
                break;

            default:
                console.error("day of the week could not be resolved");
                break;

        }

    document.getElementById('target').innerHTML = weekday + ' ' + date + ' ' + month[monthNumber] + ' ' + year + ', ' + time;

})();
