/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let source = document.getElementById('source').getAttribute('data-image');
    let figure = document.getElementById('target');
    let image = document.createElement('img');
    image.setAttribute("src", source);
    figure.appendChild(image);

        let span = document.getElementById('source');
        span.parentNode.removeChild(span);


})();
