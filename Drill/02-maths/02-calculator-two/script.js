/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    const performOperation = operation => {

    let valeurs = prendValeurs();
    let resultat
    let operateur

    switch (operation) {
        case "addition":
            resultat = valeurs[0] + valeurs[1]
            operateur = "+"
        
            break;
        case "substraction":
            resultat = valeurs[0] - valeurs[1]
            operateur = "-"
            break;
        case "multiplication":
            resultat = valeurs[0] * valeurs[1]
            operateur = "*"
            break;
        case "division":
            resultat = valeurs[0] / valeurs[1]
            operateur = "/"
            break;
        default:
            alert("WHAT?");
    }
    alert(resultat)
};
Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
    $btn.addEventListener(
        "click",
        () => (performOperation($btn.id), false),
    ),
);

function prendValeurs() {
    let nb1 = document.querySelector("#op-one").value
    let nb2 = document.querySelector("#op-two").value

    nb1 = parseInt(nb1);
    nb2 = parseInt(nb2)
    return [nb1, nb2]
}
})();
