/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {

        var jour = document.getElementById("dob-day").value
        var mois = document.getElementById("dob-month").value
        var annee = document.getElementById("dob-year").value

        var lop = new Date();
        var day = lop.getUTCDate()
        var month = lop.getMonth();
        var ann = lop.getFullYear();


        if(day < jour && month < mois){
            alert("vous avez " + (ann - 1 -annee) + " ans");
        }else{
            alert("vous avez " + (ann-annee) + " ans");
        }

    });
    // your code here
})();
