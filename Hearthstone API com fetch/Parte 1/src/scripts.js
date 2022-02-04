const cartas = document.getElementById('cartas')
const modal = document.getElementById('modal')
let cost
let playerClass
let text
let race
let mechanics
let attack
let health
let type

async function busca() {
    return await fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
            "x-rapidapi-key": "cf0b64b488mshdecf05a467c3797p1da41djsn17bbe9992163"
        }
    })
}

setTimeout(() => {
    modal.style.display = 'none'
}, 20000);

busca().then(res => res.json()).then(cards => {

    cards.Classic.forEach(carta => {
        if (carta.img !== null && carta.img !== undefined) {
            // console.log(carta)

            if (carta.cost !== null && carta.cost !== undefined) {
                cost = `<p class="card-text"><span class="font-bold">Custo:</span> ${carta.cost}</p>`
            } else {
                cost = ''
            }

            if (carta.playerClass !== null && carta.playerClass !== undefined) {
                playerClass = `<p class="card-text"><span class="font-bold">Classe:</span> ${carta.playerClass}</p>`
            } else {
                playerClass = ''
            }

            if (carta.text !== null && carta.text !== undefined) {
                text = `<p>${carta.text}</p>`
            } else {
                text = ''
            }

            if (carta.race !== null && carta.race !== undefined) {
                race = `<p class="card-text"><span class="font-bold">Raça:</span> ${carta.race}</p>`
            } else {
                race = ''
            }

            if (carta.mechanics !== null && carta.mechanics !== undefined) {

                carta.mechanics.forEach(mecanica => {
                    mechanics = `<p class="card-text"><span class="font-bold">mecânicas:</span> ${mecanica.name}</p>`
                })

            } else {
                mechanics = ''
            }

            if (carta.attack !== null && carta.attack !== undefined) {
                attack = `<p class="card-text"><span class="font-bold">Ataque:</span> ${carta.attack}</p>`
            } else {
                attack = ''
            }

            if (carta.health !== null && carta.health !== undefined) {
                health = `<p class="card-text"><span class="font-bold">Vida:</span> ${carta.health}</p>`
            } else {
                health = ''
            }

            if (carta.type !== null && carta.type !== undefined) {
                type = `<p class="card-text"><span class="font-bold">Tipo:</span> ${carta.type}</p>`
            } else {
                type = ''
            }

            cartas.innerHTML += `
            <div class="bg-[#293348] w-56 text-center rounded-lg p-5 my-4 mx-4">
            <img src="${carta.img}" class="card-img-top" alt="...">
            <div>
              <h5 class="font-bold">${carta.name}</h5>
              <p class="card-text"><span class="font-bold">Expansão:</span> ${carta.cardSet}</p>
              ${cost}
              ${playerClass}
              ${text}
              ${race}
              ${mechanics}
              ${attack}
              ${health}
              ${type}
            </div>
          </div>`
        }


    });

})