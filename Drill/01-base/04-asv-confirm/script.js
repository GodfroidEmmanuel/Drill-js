/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    do{
    var a = prompt("Etes-vous une femme ou un homme ?");
    var b = prompt("Quel est votre age ? ");
    var c = prompt("Quelle est votre ville ?");

    alert("vous êtes " + a + " vous avez " + b + " ans et vous habitez à " + c);
    var conf = confirm("vos informations sont correcte ?");
    
    if(conf == true){
        alert("parfait !");
    }
    else {
        alert("recmmencez");
    }
    }while(conf!= true);
    
    
    
})();
