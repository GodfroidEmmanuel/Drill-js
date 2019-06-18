/* becode/javascript
 *
 * /08-dom/09-match-password-one/script.js - 8.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", ()=> {

        let mdp1 = document.getElementById("pass-one");
        let mdp2 = document.getElementById("pass-two");
        
        if(mdp1.value === mdp2.value){
            mdp1.style.borderColor = "green";
            mdp2.style.borderColor = "green";
        }
        else{
            mdp1.style.borderColor = "red";
            mdp2.style.borderColor = "red";
        }
            

    })
    
    // your code here
})();
