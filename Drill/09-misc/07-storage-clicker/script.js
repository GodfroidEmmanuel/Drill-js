/* becode/javascript
 *
 * /09-misc/07-storage-clicker/script.js - 9.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let target = document.getElementById("target")
    let a = localStorage.getItem("key", target.innerHTML)
    target.innerHTML= a
    document.getElementById("increment").addEventListener("click", () =>{
        target.innerHTML++
        window.localStorage.setItem("key", target.innerHTML)
    })
    // your code here
})();
