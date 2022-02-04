const cep = document.getElementById('cep')
const rua = document.getElementById('rua')
const bairro = document.getElementById('bairro')
const cidade = document.getElementById('cidade')
const estado = document.getElementById('estado')

function callback_cep(conteudo) {
    if (!("erro" in conteudo)) {
        document.getElementById('rua').value = (conteudo.logradouro);
        document.getElementById('bairro').value = (conteudo.bairro);
        document.getElementById('cidade').value = (conteudo.localidade);
        document.getElementById('estado').value = (conteudo.uf);
    } else {
        alert("CEP não encontrado.");
    }
}

function pesquisacep(valor) {

    let cep = valor
    var script = document.createElement('script');
    script.src = `https://viacep.com.br/ws/${cep}/json/?callback=callback_cep`;
    document.body.appendChild(script);

};

cep.addEventListener('blur', function() {

    if (cep.value != '') {
        pesquisacep(cep.value);
    } else {
        alert("O campo cep esta vaziu.");
    }
})