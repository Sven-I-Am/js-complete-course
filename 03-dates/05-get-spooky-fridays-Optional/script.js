/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {
        const userInput =document.getElementById('year').value;
        const year = Number(userInput);
        for (let month = 0; month < 12; month++) {
            let day = new Date(year, month,13);
            let weekday = day.getDay();
            if (weekday === 5) {
                switch (month) {
                    case 0:
                        console.log('January');
                        break;
                    case 1:
                        console.log('February');
                        break;
                    case 2:
                        console.log('March');
                        break;
                    case 3:
                        console.log('April');
                        break;
                    case 4:
                        console.log('May');
                        break;
                    case 5:
                        console.log('June');
                        break;
                    case 6:
                        console.log('July');
                        break;
                    case 7:
                        console.log('August');
                        break;
                    case 8:
                        console.log('September');
                        break;
                    case 9:
                        console.log('October');
                        break;
                    case 10:
                        console.log('November');
                        break;
                    case 11:
                        console.log('December');
                        break;
                }
            }
        }

    })
})();
