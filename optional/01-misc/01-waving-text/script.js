/* becode/javascript
 *
 * /07-misc/01
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/*
// Static
(function() {

    // your code here

    let target = document.getElementById("target")
    let text = target.innerHTML;
    let fontSizes = [1,2,3,4,5,6,7,6,5,4,3,2];
    let newText = '';

    for (i=0; i<text.length;i++){

        let x = fontSizes[i%12];
        let char = text.charAt(i).fontsize(x);
        newText = newText + char;
    }

    document.getElementById('target').innerHTML = newText;

})();
*/

//Animated
(function () {

    let timeIndex = 0;
    let target = document.getElementById("target");
    let text = 'supercalifragilisticexpialidotious';
    let fontSizes = [1,2,3,4,5,6,6,5,4,3,2];
    setInterval(wave, 50);

    function wave(){
        target.innerHTML = ""
        let newText = "";

        for (let i = 0; i < text.length; i++) {
            let char = text.charAt(i);
            let x = (i%11 + timeIndex%11)%11;
            console.log(x);
            let textSize = fontSizes[x];
            char = char.fontsize(textSize);
            newText += char;

        }

        target.innerHTML = newText;
        document.getElementById("target").style.letterSpacing = "15px";
        timeIndex++;
    }
})();
