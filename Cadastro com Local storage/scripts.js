const form = document.forms.login;
const email = form.email
const senha = form.senha
const loginBtn = document.getElementById('login');
const cadastroBtn = document.getElementById('cadastro')
const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
const modal = document.getElementById('modal')

function verificaExistente(emailEsenha) {
    const existe = usuarios.some(function(certo) {
        return certo.email === emailEsenha.email;
    });

    return existe;
}

function vereficaEmailESenha(emailEsenha) {
    const dados = usuarios.some(function(certo) {
        return certo.email === emailEsenha.email && certo.senha === emailEsenha.senha
    });

    return dados;
}

function limpaCampos() {
    email.value;
    senha.value;

    email.focus();
}

function mensagens(texto, tipo) {
    modal.innerHTML = '';

    const elementoP = document.createElement('p');
    elementoP.innerText = texto

    modal.appendChild(elementoP);

    if (tipo == 'erro') {
        modal.style.backgroundColor = 'tomato';
        modal.style.visibility = 'visible'
        modal.style.color = 'white'
    } else if (tipo == 'sucesso') {
        modal.style.backgroundColor = '#2ecc71'
        modal.style.visibility = 'visible'
        modal.style.color = 'white'
    } else if (tipo == 'atencao') {
        modal.style.backgroundColor = 'yellow'
        modal.style.visibility = 'visible'
    }

    setTimeout(function() {
        modal.style.visibility = 'visible';
    }, 5000)
}

function validaECadastra(dados, funcao) {
    if (dados.email.trim() === '') {
        mensagens('Insira seu e-mail', 'atencao')
        email.focus()
        return;
    } else if (dados.senha.trim() === '') {
        mensagens('Insira uma senha', 'atencao');
        senha.focus();
        return;
    } else {
        funcao(dados)
    }
}

function cadastro(dados) {
    if (!verificaExistente(dados)) {
        usuarios.push(dados);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        mensagens('Usuario cadastrado ', 'sucesso')
    } else {
        mensagens('Usuario ja existente', 'erro')
    }

    limpaCampos()
}

function login(dados) {
    if (verificaExistente(dados)) {
        if (vereficaEmailESenha(dados) == false) {
            mensagens('algum dado está incorreto', 'atencao')
        } else {
            mensagens('login realizado', 'sucesso')
        }
    } else {
        mensagens('Esta conta não existe ', 'erro')
    }

    limpaCampos()
}

loginBtn.addEventListener('click', function() {

    const user = {
        email: email.value,
        senha: senha.value
    }

    validaECadastra(user, login)
})

cadastroBtn.addEventListener('click', function() {

    const user = {
        email: email.value,
        senha: senha.value
    }

    validaECadastra(user, cadastro)
})