/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let target = document.getElementById("target");
    let table = document.createElement("TABLE");

    for(let i =0; i<10; i++){
        x = [i];
        y = 1;
        z = x * y
        
        let tr = document.createElement("TR");
            table.appendChild(tr);
            

                for(var j = 0; j<1; j++){
                    let td = document.createElement("TD");
                        tr.appendChild(td);
                        td.innerHTML = `${y} * ${x} = ${z}`
                        
            }
    }

    target.appendChild(table);
})();
