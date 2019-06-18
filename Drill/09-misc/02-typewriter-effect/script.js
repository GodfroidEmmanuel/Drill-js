/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    let text = document.getElementById("target");
    let string = document.getElementById("target").innerText;
    let test = document.getElementById("target").innerText = "";
    let line = 0;
    let speed = Math.floor(Math.random() * (250-200) + 50)
    console.log(speed)
    

    let interval = setInterval(function(){
        let str = string.charAt(line);

        if (string.length === line){
            clearInterval(interval);
        }else{
            text.innerHTML += str;
            line++;
        }
},speed)
    /*var letexte = document.getElementById("target");
    letexte.innerText = ""
var montimer;
var cmpt = 0;
function typewriter(){
  let lelien = document.getElementById("target");
  if(cmpt < letexte.length){
     let courant = lelien.innerHTML.substring(0, lelien.innerHTML.length);
     courant += letexte.charAt(cmpt)+ "";
     lelien.innerHTML = courant;
  }
  else{
     lelien.innerHTML = "";
     cmpt = -1;
  }
  cmpt++;
  setTimeout("typewriter()",300);
  
}
window.onload = function(){
  typewriter();
}*/
    // your code here
})();
