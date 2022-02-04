const relogio = document.getElementById('relogio')

function atualizar() {
    let date = new Date

    let horas = date.getHours()
    let minutos = date.getMinutes()
    let segundos = date.getSeconds()

    relogio.innerText = `${horas}:${minutos}:${segundos}`

}
setInterval(atualizar, 1000)