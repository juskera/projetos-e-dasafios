const pesquisa = document.getElementById('pesquisa');
const botao = document.getElementById('botao')

async function busca() {
    return await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${pesquisa.value}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key": "cf0b64b488mshdecf05a467c3797p1da41djsn17bbe9992163"
        }
    })
}

function segundosParaMinutos(total) {
    let minutos = Math.floor(total / 60);
    let segundos = total - minutos * 60;
    return (
        minutos + ":" + (segundos < 10 ? "0" : "") + segundos
    );
}

botao.addEventListener('click', function(evt) {
    evt.preventDefault()

    document.getElementById('cards').innerHTML = ""

    busca().then(res => res.json())
        .then(resultado => resultado.data.forEach(pesquisa => {
            // console.log(pesquisa)
            document.getElementById('cards').innerHTML += `
            <div class="music">
            <div class="titulo">
                <p>${pesquisa.title}</p>
            </div>
            <div class="artista">
                <img src="${pesquisa.artist.picture_small}" alt="">
                <p>${pesquisa.artist.name}</p>
            </div>
            <div class="imagem"><img src="${pesquisa.album.cover}"></div>
            <div class="informaçoes">
                <p>Àlbum: ${pesquisa.album.title}</p>
                <p>Rank: ${pesquisa.rank}</p>
            </div>
            <div class="play">
                <audio controls preload="none">
                <source src="${pesquisa.preview}" type="audio/ogg">
                <source src="${pesquisa.preview}" type="audio/mpeg">
                Your browser does not support the audio element.
                </audio> 
                <p>${segundosParaMinutos(pesquisa.duration)}</p>
            </div>

        </div>
            `

        }))

})