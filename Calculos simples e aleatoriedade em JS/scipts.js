document.getElementById('btn1').addEventListener('click', function(evt) {
    evt.preventDefault();
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value

    let meses = parseInt(idade) * 12
    let dias = parseInt(idade) * 365
    let horas = parseInt(dias) * 24

    document.getElementById("content1").innerHTML = `
    <p>O seu nome é: ${nome} você tem ${idade} anos de idade oque equivale a ${meses} meses ou ${dias} dias ou ${horas} horas</p> </br>`
});


document.getElementById('btn2').addEventListener('click', function(evt) {
    evt.preventDefault();
    let raio = document.getElementById("circulo").value;
    let circun = (2 * Math.PI * raio)
    let areaCir = (Math.PI * raio)

    let areaBase = document.getElementById("cubo").value
    let area = (Math.pow(parseInt(areaBase), 2))
    let volumeCubo = (Math.pow(parseInt(areaBase), 3))
    let At = (area * 6)
    let AL = (Math.pow(4 * parseInt(areaBase), 2))

    let baseMaior = document.getElementById("baseMaior").value
    let baseMenor = document.getElementById("baseMenor").value
    let alturaTrap = document.getElementById("alturaTrap").value
    let Atrap = (((parseInt(baseMaior) + parseInt(baseMenor)) * alturaTrap) / 2)

    let raiz = document.getElementById("raiz").value
    let raizResult = Math.sqrt(parseInt(raiz))

    document.getElementById("content2").innerHTML = `
    <p>A circunferencia do circulo é: ${circun.toFixed(3)} e a area é: ${areaCir.toFixed(3)}</p>
    </br>
    <p>A area do cubo é: ${area.toFixed(3)} , o volume é: ${volumeCubo.toFixed(3)} , a area total é: ${At.toFixed(3)} e a area latera é: ${AL.toFixed(3)}</p>
    </br>
    <p>A area do trabalho é: ${Atrap.toFixed(3)}</p>
    </br>
    <p>A raiz quadadra é: ${raizResult.toFixed(3)}</p>`
})

document.getElementById('aleato').addEventListener('click', function() {
    aleatorio()

    function aleatorio(min, max) {
        min = Math.ceil(1);
        max = Math.floor(10);
        document.getElementById("content3").innerHTML = `<p>numero aleatorio = ${Math.floor(Math.random() * (max - min)) + min}</p> </br>`
    }


})



function multiply(a, b) {
    a * b;
}