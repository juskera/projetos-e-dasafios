const formulario = document.forms.dados;
const fundoModal = document.getElementById('fundo-modal');
const modalResultados = document.getElementById('resultado');
const modalHistorico = document.getElementById('historico');
const modalZeroRegistros = document.getElementById('zero-registros');
const corpoTabelaResultados = document.querySelector('#resultado tbody');
const corpoTabelaHistorico = document.querySelector('#historico tbody');
const botaoSalvaNoHistorico = document.getElementById('salvar');
const botaoDescarta = document.getElementById('descartar');
const botaoMostraModalHistorico = document.getElementById('ver-historico');
const botaoFechaModalHistorico = document.getElementById('fechar');
const botaoExcluirRegistros = document.getElementById('excluir-registros');

let historico = JSON.parse(localStorage.getItem('historico')) || [];

const btnCalcular = document.getElementById('btnCalcular')

function excluiRegistro(indice) {
    historico.splice(indice, 1);
    atualizaHistorico();
};



document.getElementById('fundo-modal').addEventListener('click', function() {

    document.getElementById('fundo-modal').style["visibility"] = "hidden";
    document.getElementById('resultado').style["visibility"] = "hidden";
    document.getElementById('historico').style["visibility"] = "hidden";
    document.getElementById('zero-registros').style["visibility"] = "hidden";


});


function calculaGastoDiario(dados) {
    let gastoDiario = (dados.kmPorDia / dados.media) * dados.preco;;
    return gastoDiario.toFixed(2);
};

function calculaGastoSemanal(dados) {
    let gastoSemanal = calculaGastoDiario(dados) * dados.diasRodadosSemana;
    return gastoSemanal.toFixed(2);
};

function calculaGastoMensal(dados) {
    let gastoMensal = calculaGastoSemanal(dados) * 4;
    return gastoMensal.toFixed(2);
};

function calculaGastoAnual(dados) {
    let gastoAnual = calculaGastoMensal(dados) * 12;
    return gastoAnual.toFixed(2);
};

function modalDeResultados(dadosInformados) {
    corpoTabelaResultados.innerHTML = `
        <tr>
            <td>R$ ${calculaGastoDiario(dadosInformados).replace('.', ',')}</td>
            <td>R$ ${calculaGastoSemanal(dadosInformados).replace('.', ',')}</td>
            <td>R$ ${calculaGastoMensal(dadosInformados).replace('.', ',')}</td>
            <td>R$ ${calculaGastoAnual(dadosInformados).replace('.', ',')}</td>
        </tr>
    `;

    fundoModal.style.visibility = 'visible';
    modalResultados.style.visibility = 'visible';
};

function modalDoHistorico() {
    fundoModal.style.visibility = 'visible';
    modalHistorico.style.visibility = 'visible';
    atualizaHistorico();
};



function fechaModal() {
    document.querySelectorAll('input')
        .forEach(function(input) {
            input.value = '';
        });

    modalResultados.style.visibility = 'hidden';
    modalHistorico.style.visibility = 'hidden';
    fundoModal.style.visibility = 'hidden';
    modalZeroRegistros.style.visibility = 'hidden';

    formulario.media.focus();
};

fundoModal.addEventListener('click', fechaModal);
botaoDescarta.addEventListener('click', fechaModal);
botaoFechaModalHistorico.addEventListener('click', fechaModal);

botaoMostraModalHistorico.addEventListener('click', modalDoHistorico);

function preencheZero(numero) {
    return ('0' + numero).slice(-2);
}

function atualizaHistorico() {
    if (historico.length < 1) {
        modalHistorico.style.visibility = 'hidden';
        modalZeroRegistros.style.visibility = 'visible';
    } else {
        corpoTabelaHistorico.innerHTML = '';

        for (dado of historico) {
            corpoTabelaHistorico.innerHTML += `
            <tr>
                <td>${dado.dataRegistro}</td>
                <td>R$ ${dado.preco.replace('.', ',')}</td>
                <td>${dado.media} km/l</td>
                <td>R$ ${calculaGastoDiario(dado).replace('.', ',')}</td>
                <td>R$ ${calculaGastoSemanal(dado).replace('.', ',')}</td>
                <td>R$ ${calculaGastoMensal(dado).replace('.', ',')}</td>
                <td>R$ ${calculaGastoAnual(dado).replace('.', ',')}</td>

                <td
                    class="excluir-item"
                    onclick="excluiRegistro(${historico.indexOf(dado)})"
                >
                    <span class="material-icons">
                        delete
                    </span>
                </td>
            </tr>
            `;


        };
        localStorage.setItem('historico', JSON.stringify(historico))
    }
}
botaoSalvaNoHistorico.addEventListener('click', function() {

    let objData = new Date();

    let dia = preencheZero(objData.getDate());
    let mes = preencheZero(objData.getMonth() + 1);
    let ano = preencheZero(objData.getUTCFullYear());
    let horas = preencheZero(objData.getHours());
    let minutos = preencheZero(objData.getMinutes());
    let segundos = preencheZero(objData.getSeconds());

    historico.unshift({
        media: formulario.media.value.replace(',', '.'),
        preco: formulario.preco.value.replace(',', '.'),
        kmPorDia: formulario.quilometros_dia.value.replace(',', '.'),
        diasRodadosSemana: formulario.dias_semana.value.replace(',', '.'),
        dataRegistro: `${dia}/${mes}/${ano} - ${horas}:${minutos}:${segundos}`
    });

    fechaModal();
});

btnCalcular.addEventListener('click', function(evt) {
    evt.preventDefault();

    let media = formulario.media.value.replace(',', '.');
    let preco = formulario.preco.value.replace(',', '.');
    let kmPorDia = formulario.quilometros_dia.value.replace(',', '.');
    let diasRodadosSemana = formulario.dias_semana.value;

    const dadosInformados = {
        media: Number(media),
        preco: Number(preco),
        kmPorDia: Number(kmPorDia),
        diasRodadosSemana: Number(diasRodadosSemana)
    };

    modalDeResultados(dadosInformados);
});

// passar como exercicio
function excluiRegistro(posicaoRegistro) {
    historico.splice(posicaoRegistro, 1);
    atualizaHistorico();
};

function excluiTodosRegistros() {
    historico = [];
    atualizaHistorico();
};
botaoExcluirRegistros.addEventListener('click', excluiTodosRegistros);