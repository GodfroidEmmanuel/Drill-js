/* becode/javascript
 *
 * /09-misc/06-guess-number/script.js - 9.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let count = 0;
let nb_alea = Math.floor(Math.random()*100);

    function ask(){
            do{
                var demande = prompt("entrez un chiffre entre 1 et 100 ");
                count++;
            
         
                 if(demande > nb_alea){
                     alert("Plus petit");
                 }
                 else if(demande < nb_alea) {
                     alert("Plus grand");
                 }
                 else if(demande == nb_alea) {
                     alert("Félicitations vous avez trouvé le nombre en " + count + " coups");
        
                 }
         
            }while(demande != nb_alea){
                    alert(demande);
            }
     }
     ask();
     
    // your code here
})();
