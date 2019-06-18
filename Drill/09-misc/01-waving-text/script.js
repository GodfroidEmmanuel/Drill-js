/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let target = document.getElementById("target");
let targetText = target.innerText;
taille = ["10px", "15px", "20px", "25px", "30px"];

target.innerText = "";

let d=document.getElementsByClassName("size");

function wave() {
let switcher = true;
let j = 0;

for(let i=0;i < targetText.length;i++) {
let newElement = document.createElement("span");
newElement.innerText = targetText[i];
target.appendChild(newElement);
newElement.setAttribute("class","size");

    if(j == taille.length - 1){
        switcher = false;
    }else if(j == 0){
        switcher = true;
    }

    if(switcher){
        j++;
    }else{
        j--;
    }
    
    newElement.style.fontSize = taille[j]
}        

}

wave()
   
})();
