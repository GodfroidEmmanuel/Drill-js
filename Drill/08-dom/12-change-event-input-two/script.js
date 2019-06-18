/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let compt=0;
    let b=document.querySelector("#pass-one").value;
    
    let d=document.querySelector("input");
    let e=document.querySelector("#validity");
    
    for(let i=0;i<b.length;i++){
    if(!isNaN(b[i])){
    compt++
    }}
    if(compt>=2){
        if(b.length>=7){
    
    e.innerText="Ok";
    }
    }
    
    
})();
