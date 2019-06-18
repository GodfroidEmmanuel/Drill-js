/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("red").addEventListener("click", () => {
       let testr = document.body
       testr.style.backgroundColor = "red"

    });
    document.getElementById("yellow").addEventListener("click", () => {
        let testy = document.body
       testy.style.backgroundColor = "yellow"
    });
    document.getElementById("green").addEventListener("click", () => {
        let testg = document.body
       testg.style.backgroundColor = "green"
    });
    document.getElementById("blue").addEventListener("click", () => {
        let testb = document.body
       testb.style.backgroundColor = "blue"
    });
})();
