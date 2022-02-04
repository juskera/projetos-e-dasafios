const nome = document.getElementById('nome')
const email = document.getElementById('email')
const telefone = document.getElementById('telefone')
const estadCivil = document.getElementById('estado-civil')
const esco = document.getElementById('escolaridade')
const cep = document.getElementById('cep')
const rua = document.getElementById('rua')
const numrua = document.getElementById('numrua')
const comple = document.getElementById('complemento')
const bairro = document.getElementById('bairro')
const cidade = document.getElementById('Cidade')
const estado = document.getElementById('estado')
let lista = []

//pega as horas
let Data = new Date();
let dia = Data.getDate();
let mes = Data.getMonth() + 1;
let ano = Data.getFullYear();

//checa se o complemento foi escolhido
//foi escolhido

document.getElementById('enviar').addEventListener('click', function(evt) {


    evt.preventDefault();
    if (document.getElementById('sim').checked) {
        //transforma o input complemento em requirido
        document.getElementById('complemento').Required = true

        //adiciona itens ao objeto
        let adicionar = {
                nome: nome.value,
                email: email.value,
                telefone: telefone.value,
                estadCivil: estadCivil.value,
                esco: esco.value,
                cep: cep.value,
                rua: rua.value,
                numrua: numrua.value,
                comple: comple.value,
                bairro: bairro.value,
                cidade: cidade.value,
                estado: estado.value,
                hora: `${dia}/${mes}/${ano}`

            }
            //adiciona o objeto a string
        lista.push(adicionar);

        lista.forEach(cadastro => {
            document.querySelector('tbody').innerHTML += `
        <tr>
            <td>${cadastro.nome}</td>
            <td>${cadastro.email}</td>
            <td>${cadastro.telefone}<td>
            <td>${cadastro.estadCivil}</td>
            <td>${cadastro.esco}</td>
            <td>${cadastro.cep}</td>
            <td>${cadastro.rua}</td>
            <td>${cadastro.numrua}</td>
            <td>${cadastro.comple}</td>
            <td>${cadastro.bairro}</td>
            <td>${cadastro.cidade}</td>
            <td>${cadastro.estado}</td>
            <td>${cadastro.hora}</td>
        </tr>`
        })

        //adiciona itens a tabela


        document.getElementById('contador').textContent = `quantidade de usuarios registrados:${lista.length}`
    }




    //se não foi escolhido
    else if (document.getElementById('nao').checked) {

        evt.preventDefault();
        //cria o objeto

        //adiciona itens ao objeto
        let adicionar = {
            nome: nome.value,
            email: email.value,
            telefone: telefone.value,
            estadCivil: estadCivil.value,
            esco: esco.value,
            cep: cep.value,
            rua: rua.value,
            numrua: numrua.value,
            bairro: bairro.value,
            cidade: cidade.value,
            estado: estado.value,
            hora: `${dia}/${mes}/${ano}`

        }

        //adiciona o objeto a string
        lista.push(adicionar);

        //adiciona itens a tabela

        lista.forEach(cadastro => {
            document.querySelector('tbody').innerHTML += `
            <tr>
                <td>${cadastro.nome}</td>
                <td>${cadastro.email}</td>
                <td>${cadastro.estadCivil}<td>
                <td>${cadastro.estadoCivil}</td>
                <td>${cadastro.esco}</td>
                <td>${cadastro.cep}</td>
                <td>${cadastro.rua}</td>
                <td>${cadastro.numrua}</td>
                <td>Não nessesario</td>
                <td>${cadastro.bairro}</td>
                <td>${cadastro.cidade}</td>
                <td>${cadastro.estado}</td>
                <td>${cadastro.hora}</td>
            </tr>`
        })



    }
})