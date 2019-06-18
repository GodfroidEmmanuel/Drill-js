/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    document.getElementById("pass-one").addEventListener("keypress", () => {
        document.getElementById("pass-one").maxLength = "10";
        
        let champ = document.getElementById("pass-one").value;
         
        let compteur = document.getElementById("counter");
        compteur.innerText = champ.lenght + "/10";
        console.log("test") ;

          

    });
    
    
    
   
})();
