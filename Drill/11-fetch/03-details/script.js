/* becode/javascript
 *
 * /11-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.querySelector('#run').addEventListener('click', function() {  
        fetch("http://localhost:3000/heroes").then(function(response) { 
            return response.json(); 
        }).then(function(heroes) {
            let idhero = document.getElementById("hero-id").value
            // pour chaque faire =>
            heroes.forEach(function (heroe) {
                if (idhero == heroe.id){
                // cible target et ajoute chaques balise + heroe. ce qu'on veut vu que hereo renv à heroes
              document.getElementById('target').innerHTML += '<li class="hero"> \
                    <h4 class="title"> \
                        <strong class="name">'+ heroe.name +'</strong> \
                        <em class="alter-ego">'+ heroe.alterEgo +'</em> \
                    </h4> \
                    <p class="powers">'+ heroe.abilities.join(", ") +'</p> \
                </li>'; 
            }
            });
        }).catch(function (err){ 
            console.log("Il y a une erreur", err);
        });
    });
    // your code here
})();
