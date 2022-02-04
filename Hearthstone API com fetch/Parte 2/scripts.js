const cartas = document.getElementById('cartas')
const modal = document.getElementById('modal')
const espançao = document.getElementById('expançao')
const buscar = document.getElementById('buscar')
let cost
let playerClass
let text
let race
let mechanics
let attack
let health
let type
let flavor
let artist

async function busca() {
    return await fetch(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/${espançao.value.replace(' ', '_')}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
            "x-rapidapi-key": "cf0b64b488mshdecf05a467c3797p1da41djsn17bbe9992163"
        }
    })
}

buscar.addEventListener('click', () => {

    cartas.innerHTML = ""

    modal.style.display = 'block'

    setTimeout(() => {
        modal.style.display = 'none'
    }, 5000);

    busca().then(res => res.json()).then(cards => {
        // console.log(cards)

        cards.forEach(carta => {
            if (carta.img !== null && carta.img !== undefined) {
                console.log(carta)

                if (carta.cost !== null && carta.cost !== undefined) {
                    cost = `<p class="card-text"><span class="font-weight-bold">Custo:</span> ${carta.cost}</p>`
                } else {
                    cost = ''
                }

                if (carta.playerClass !== null && carta.playerClass !== undefined) {
                    playerClass = `<p class="card-text"><span class="font-weight-bold">Classe:</span> ${carta.playerClass}</p>`
                } else {
                    playerClass = ''
                }

                if (carta.text !== null && carta.text !== undefined) {
                    text = `<p>${carta.text}</p>`
                } else {
                    text = ''
                }

                if (carta.race !== null && carta.race !== undefined) {
                    race = `<p class="card-text"><span class="font-weight-bold">Raça:</span> ${carta.race}</p>`
                } else {
                    race = ''
                }

                if (carta.mechanics !== null && carta.mechanics !== undefined) {

                    carta.mechanics.forEach(mecanica => {
                        mechanics = `<p class="card-text"><span class="font-weight-bold">mecânicas:</span> ${mecanica.name}</p>`
                    })

                } else {
                    mechanics = ''
                }

                if (carta.attack !== null && carta.attack !== undefined) {
                    attack = `<p class="card-text"><span class="font-weight-bold">Ataque:</span> ${carta.attack}</p>`
                } else {
                    attack = ''
                }

                if (carta.health !== null && carta.health !== undefined) {
                    health = `<p class="card-text"><span class="font-weight-bold">Vida:</span> ${carta.health}</p>`
                } else {
                    health = ''
                }

                if (carta.type !== null && carta.type !== undefined) {
                    type = `<p class="card-text"><span class="font-weight-bold">Tipo:</span> ${carta.type}</p>`
                } else {
                    type = ''
                }

                if (carta.flavor !== null && carta.flavor !== undefined) {
                    flavor = `<p class="card-text"><span class="font-weight-bold">História da carta:</span> ${carta.flavor }</p>`
                } else {
                    flavor = ''
                }

                if (carta.artist !== null && carta.artist !== undefined) {
                    artist = `<p class="card-text"><span class="font-weight-bold">Artista :</span> ${carta.artist }</p>`
                } else {
                    artist = ''
                }

                cartas.innerHTML += `

            <div class="card mx-auto text-center mb-md-5 rounded bg-dark text-white" style="width: 18rem;">
                <img class="card-img-top" src="${carta.img}" alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title">${carta.name}</h5>
                <p class="card-text"><span class="font-bold">Expansão:</span> ${carta.cardSet}</p>
                ${cost}
                ${playerClass}
                ${text}
                ${race}
                ${mechanics}
                ${attack}
                ${health}
                ${type}
                ${flavor}
                ${artist}
                </div>
            </div>`
            }


        });

    })
})