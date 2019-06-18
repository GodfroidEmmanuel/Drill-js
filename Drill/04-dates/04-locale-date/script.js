/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here
    

    let tab_day = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
    let tab_month= ["janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];
    let time = new Date()
    let day = time.getDay()
    var jour = time.getUTCDate()
    let month = time.getMonth()
    let year = time.getFullYear()
    let h = time.getHours()
    let m = time.getMinutes()

    let change = document.getElementById("target")
    change.innerHTML = tab_day[day] + " " + jour + " " + tab_month[month]+ " " + year + ", " + h + "h" + m ;
    
    

    
})();
