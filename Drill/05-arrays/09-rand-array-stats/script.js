/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
let tab = [];
let a = document.querySelectorAll("table tr td");

document.getElementById("run").addEventListener("click", () => {

        a.forEach((nbAl) => {
            let rand = Math.round(Math.random() * 100);
            tab.push(rand);
            nbAl.innerText = rand;
        })

        const somme = tab => tab.reduce((a,b) => a + b, 0)
        console.log(somme);
        
        
            document.getElementById("max").innerText = Math.max(...tab);
            document.getElementById("min").innerText = Math.min(...tab);
            document.getElementById("sum").innerText =tab.reduce((a,b) => a + b, 0);
            document.getElementById("average").innerText = tab.reduce((a,b) => a + b, 0) / tab.length;
        })
   

    // your code here
})();
