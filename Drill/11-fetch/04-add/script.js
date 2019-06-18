document.querySelector('#run').addEventListener('click', async function() {
        const heroes = await fetch("http://localhost:3000/heroes", {
            method: "POST", 
            headers:{ 'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: document.getElementById("hero-name").value,
                alterEgo: document.getElementById("hero-alter-ego").value,
                abilities: document.getElementById("hero-powers").value.split(", ")
            })
    })
    const content = await heroes.json();
    console.log(content)
})

