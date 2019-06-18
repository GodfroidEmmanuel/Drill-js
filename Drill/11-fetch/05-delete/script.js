document.querySelector('#run').addEventListener('click', async function() {
    const heroes = await fetch("http://localhost:3000/heroes/" + document.getElementById("hero-id").value, {
        method: "delete", 
        
        })

const content = await heroes.json();
console.log(content)
})