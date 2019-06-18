/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
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
            // pour chaque faire =>
            heroes.forEach(function (heroe) {
                // cible target et ajoute chaques balise + heroe. ce qu'on veut vu que hereo renv à heroes
              document.getElementById('target').innerHTML += '<li class="hero"> \
                    <h4 class="title"> \
                        <strong class="name">'+ heroe.name +'</strong> \
                        <em class="alter-ego">'+ heroe.alterEgo +'</em> \
                    </h4> \
                    <p class="powers">'+ heroe.abilities.join(", ") +'</p> \
                </li>'; 
            });
        }).catch(function (err){ 
            console.log("Il y a une erreur", err);
        });
    });
    
    // your code here

    // autre facon de faire
    /*
            let template = document.querySelector("#tpl-hero");
        let hero= template.content.querySelector('.hero');
        let target = document.querySelector('#target');
        fetch('http://localhost:3000/heroes')
            .then(function (response) {
                return response.json();
            })
            .then(function (myjson) {
                let list = myjson
                console.log(list)
                for (i = 0; i < list.length; i++) {
                let a = document.importNode(hero, true);
                let name = a.querySelector('.name');
                let alter=a.querySelector('.alter-ego');
                let abili=a.querySelector('.powers');
                
                name.innerHTML=list[i].name
                alter.innerHTML=list[i].alterEgo
                abili.innerHTML=list[i].abilities
                target.appendChild(a)
                }
            });

    })*/
})();
