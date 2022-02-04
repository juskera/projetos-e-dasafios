//Portugol
const portPara1 = document.getElementById("portugolContentP1")
const portPara2 = document.getElementById("portugolContentP2")
const portPara3 = document.getElementById("portugolContentP3")

portPara1.textContent = `Usar essa linguagem faz com que voce entenda a ideia por trás de programar e poder usar essa ideia em qualquer outra linguagem, você vai aos poucos entendendo o que é de fato programar: realizar tarefas e resolver problemas não importando qual a linguagem, mas sim a forma que você pensa. Portanto foque em como as coisas funcionam pois assim você irá conseguir reproduzir o que foi aprendido em outras linguagens que for estudar.`
portPara2.textContent = `Português estruturado tem uma fácil compreensão para nós justamente por ser em nosso idioma nativo, todos os comandos são em português, portanto você só foca em entender como tudo funciona, mas antes de começar a usar o português estruturado precisamos instalar um editor que o compreenda, o vscode vamos usar em breve para HTML, CSS e JavaScript`
portPara3.textContent = `um exemplo de um codigo simples escrito em portugol:`

//Variaveis no Portugol

const varPortPara1 = document.getElementById("varPort1")
const varPortPara2 = document.getElementById("varPort2")
const varPortPara3 = document.getElementById("varPort3")
const varPortPara4 = document.getElementById("varPort4")
const varPortPara5 = document.getElementById("varPort5")

varPortPara1.textContent = `Variáveis são umas das coisas mais importantes em um código, seja de qual linguagem for, inclusive aqui com Portugol, variáveis são espaços na memória do computador que recebem um nome → identificador e um determinado valor, elas existem em tempo de execução, ou seja, enquanto o programa está "rodando", ficará mais claro com exemplos reais, para criar variáveis no Portugol precisamos também informar qual o tipo dessa variável, se é um número, uma palavra...vamos ver 3 principais tipos que temos disponíveis no Portugol:`
varPortPara2.textContent = `cadeia → cadeia de caracteres, ou seja, palavras em geral`
varPortPara3.textContent = `real → números que podem ter casas decimais positivos ou negativos`
varPortPara4.textContent = `inteiro → números inteiros positivos ou negativos`
varPortPara4.textContent = `Com os 3 tipos acima podemos fazer muita coisa interessante, então vamos logo iniciar com alguns exemplos e ir aprendendo com o passar do conteúdo.A criação de variáveis ocorre logo no início do código, antes da função início, observe um exemplo:`

//Condiçoes no Portugol

const sePortPara1 = document.getElementById("sePort1")
const sePortPara2 = document.getElementById("sePort2")

sePortPara1.textContent = `Vamos aprender agora sobre condicionais, por exemplo no calculo de média que fizemos, poderíamos direcionar o código para 2 lados: aprovado ou reprovado, para isso precisamos de uma condição, por exemplo: se a media for maior ou igual a 6 o aluno é aprovado, senão ele é reprovado, existe uma estrutura específica para isso na programação, no Portugol se chama se, no mundo real se chama if, observe:`
sePortPara2.textContent = `Claro que é um exemplo bem bobinho e simples, mas dá para perceber que dependendo de uma condição algo é executado, senão, outro algo será executado, essa é a ideia.`

//Loops no Portugol

const loopPortPara1 = document.getElementById("loopPort1")
const loopPortPara2 = document.getElementById("loopPort2")
const loopPortPara3 = document.getElementById("loopPort3")
const loopPortPara4 = document.getElementById("loopPort4")
const loopPortPara5 = document.getElementById("loopPort5")

loopPortPara1.textContent = `Os loops são usados em várias linguagens de programação, como o JavaScript que você irá aprender em breve, eles são usados para executar alguma tarefa por quantas vezes você definir, para que você entenda melhor vamos criar um programinha que se beneficiará do loop, no caso um sistema que também calcula a média das notas de um aluno, porém com o diferencial que o programa pergunta quantas notas serão calculadas:`
loopPortPara2.textContent = `Temos a variável contador que inicia com o valor 0;`
loopPortPara3.textContent = `Enquanto contador for menor que qtdNotas o loop irá fazer algo;`
loopPortPara4.textContent = `A cada loop contador ganha +1 em seu valor até que seu valor seja = qtdNotas e o loop termina;`
loopPortPara5.textContent = `A cada loop o que está entre as { } é executado;`

//html

const basicoHtmlPara1 = document.getElementById("htmlContentP1")
const basicoHtmlPara2 = document.getElementById("htmlContentP2")
const basicoHtmlPara3 = document.getElementById("htmlContentP3")
const basicoHtmlPara4 = document.getElementById("htmlContentP4")

basicoHtmlPara1.textContent = `HTML é a tecnologia inicial do desenvolvimento WEB, com o HTML estruturamos uma página descrevendo quais elementos ela possuirá, importante deixar claro que HTML é uma linguagem de marcação e não de programação, se fossemos fazer uma comparação com o corpo humano, o HTML seria o nosso esqueleto.`
basicoHtmlPara2.textContent = `HTML → HyperText Markup Language`
basicoHtmlPara3.textContent = `Para criar um documento HTML, crie uma pasta em qualquer lugar do seu computador e abra essa pasta no seu vscode, em seguida crie um arquivo chamado index.html.`
basicoHtmlPara4.textContent = `Com o arquivo aberto e vazio, podemos usar um atalho do vscode, que é digitando ! + enter em seguida, com isso o vscode já inclui um arquivo HTML básico para começarmos:`

//css

const cssBasicoPart1 = document.getElementById("css1")
const cssBasicoPart2 = document.getElementById("css2")

cssBasicoPart1.textContent = `CSS (Cascading Style Sheets ou Folhas de Estilo em Cascata) é uma linguagem de estilo (en-US) usada para descrever a apresentação de um documento escrito em HTML ou em XML (incluindo várias linguagens em XML como SVG, MathML ou XHTML). O CSS descreve como elementos são mostrados na tela, no papel, na fala ou em outras mídias.`
cssBasicoPart2.textContent = `Abaixo vemos o básico da sintaxe do CSS, o seletor e as chaves:`

//hierarquia do css

const csshierPart1 = document.getElementById("csshier1")
const csshierPart2 = document.getElementById("csshier2")
const csshierPart3 = document.getElementById("csshier3")
const csshierPart4 = document.getElementById("csshier4")

csshierPart1.textContent = `A sigla do CSS como sabemos significa Cascading Style Sheets, ou seja, folhas de estilo em cascata, se observarmos uma cascata vamos perceber que a água desce, assim como a "força" dos estilos no CSS, o que vem embaixo sobrepõe o que foi escrito em cima, mas nessa regra há exceções e é o que vamos ver nessa aula.`
csshierPart2.textContent = `Observe o seguinte techo de CSS:`
csshierPart3.textContent = `Temos o mesmo elemento sendo selecionado em 2 momentos, mas o que vai valer no final é o segundo que veio por último embaixo, ou seja, o elemento <p> em questão receberá 24px como tamanho de fonte.        Mas imagine que esse <p> esteja dentro de uma <div>, e no CSS fazemos o seguinte:`
csshierPart4.textContent = `Uma forma não muito interessante de fazer algo parecido com o que vimos acima é usando o !important, ele funciona mas não é muito recomendado, a boa prática é fazer selecões precisas e bem pensadas, mas vejamos como o !important funciona:`


//variaveis no javascript

const jsvarpart1 = document.getElementById("var1")
const jsvarpart2 = document.getElementById("var2")
const jsvarpart3 = document.getElementById("var3")
const jsvarpart4 = document.getElementById("var4")
const jsvarpart5 = document.getElementById("var5")
const jsvarpart6 = document.getElementById("var6")
const jsvarpart7 = document.getElementById("var7")

jsvarpart1.textContent = `Quando estávamos estudando portugol vimos que as variáveis são usadas para criarmos referências na memória, nelas atribuímos valores e fazemos manipulações de dados a partir delas, no JavaScript é exatamente a mesma coisa, o que muda é apenas como criamos as variáveis, temos 3 palavrinhas chave para a criação de variáveis, num primeiro momento será um pouco confuso e é 100% normal que seja, fique tranquilo se não entender de primeira vista.`
jsvarpart2.textContent = `var`
jsvarpart3.textContent = `Essa é a maneira mais "antiga" de criar variáveis no JavaScript, "var" vem de "variable", ou seja, variável mesmo como podemos deduzir, não há segredo nenhum em sua sintaxe, veremos exemplos a seguir:`
jsvarpart4.textContent = `let`
jsvarpart5.textContent = `A let declara variáveis que "funcionam" dentro de um escopo de bloco ou expressão na qual é usada. Ao contrário da variável var, ela não declara uma variável globalmente ou localmente para uma função inteira, independente do escopo do bloco em si. Com ela não criamos uma propriedade no objeto global, por exemplo:`
jsvarpart6.textContent = `const`
jsvarpart7.textContent = `Usar const para declarar variáveis é o mais recomendado, pois após declarado e atribuído um valor, esse valor não pode ser modificado, ao contrário de var e let a const não pode ser iniciada sem a atribuição de um valor.`