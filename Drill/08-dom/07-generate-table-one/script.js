/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
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
            let tr = document.createElement("TR");
                table.appendChild(tr);

                    for(var j = 0; j<1; j++){
                        let td = document.createElement("TD");
                            tr.appendChild(td);
                }
        }

        target.appendChild(table);
    

})();
