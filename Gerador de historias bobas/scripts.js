const nome = document.getElementById('nome')
const monstros = document.getElementById('monstros')
const especie = document.getElementById('especie')
const armamento = document.getElementById('armamento')
const local = document.getElementById('local')
const acidente = document.getElementById('acidente')
const iniciar = document.getElementById('iniciar')
let data = new Date();
const textcontent = document.getElementById('textocontent')
let backImages = []
const sec2 = document.getElementById('sec2')
let i = 0
const div2 = document.getElementById('content')


iniciar.addEventListener('click', function() {

    sec2.style.visibility = 'visible';
    sec2.style.height = '100vh'

    div2.style.width = '100vh'
    div2.style.padding = '40px'
    div2.style.border = '3px solid white'

    switch (monstros.value) {
        case 'Zumbis':
            backImages = [];
            backImages.push('https://i.pinimg.com/originals/66/b7/b5/66b7b54bc106aa6f64a436b99121a877.jpg')
            backImages.push('https://s1.1zoom.me/b5050/117/342078-blackangel_1920x1080.jpg');
            backImages.push('https://i.pinimg.com/originals/eb/21/37/eb213700250bfa06ffecc1adc782ae50.jpg');
            backImages.push('https://acrediteounao.com/wp-content/uploads/2017/01/resident-evil-wallpaper-zombie-images-1920x1080.jpg');
            sec2.style.backgroundImage = `url('${backImages[0]}')`

            texto = `Era uma vez em lugar chamado ${local.value} havia lá um habitante que se chamava ${nome.value}, ele era um ${especie.value} muito alegre, até que foi chegada a era dos ${monstros.value}, que foi causada em ${data.getFullYear()} por uma ${acidente.value} que fazia com que os humanos pertos se tornassem ${monstros.value}, criaturas sem qualquer tipo de consciência, suas únicas motivações eram comer ${especie.value} e dançar break. O ${especie.value} se viu obrigado a aprender técnicas de combate aprimoradas, até que encontrou uma ${armamento.value}, ferramenta que ele utilizou por décadas no combate destes ${monstros.value}, até que um dia aprendeu uma magia capaz de trazer os ${monstros.value} de volta a sanidade mental, esses por sua vez não esqueceram como dançar break... Fim".`

            break;
        case 'Vampiros':
            backImages = [];
            //É incrivelmente difícil encontrar vampiros que não sejam humanos normais e pálidos
            backImages.push('https://s1.1zoom.me/big0/400/Vampires_Monsters_Jump_Hunting_519272_1024x1024.jpg')
            backImages.push('https://s1.1zoom.me/b4849/985/Vampires_Monsters_Blood_525261_1600x1200.jpg')
            backImages.push('https://wallpaperaccess.com/full/1159935.jpg')
            backImages.push('https://c4.wallpaperflare.com/wallpaper/581/688/7/digital-art-artwork-video-games-men-gwent-hd-wallpaper-preview.jpg')
            sec2.style.backgroundImage = `url('${backImages[0]}')`
            break;
        case 'Lobisomens':
            backImages = []
            backImages.push('https://wallup.net/wp-content/uploads/2017/11/22/336659-werewolves-748x404.jpg')
            backImages.push('https://image.winudf.com/v2/image/Y29tLkx3cE1hc3Rlci5XZXJld29sZjM4X3NjcmVlbl8wX3VmYWV3aDcx/screen-0.jpg?fakeurl=1&type=.jpg')
            backImages.push('https://vistapointe.net/images/werewolf-5.jpg')
            backImages.push('https://wallpapercave.com/wp/wp2920384.jpg')
            sec2.style.backgroundImage = `url('${backImages[0]}')`
            break;
        case 'Fantasmas':
            backImages = []
            backImages.push('https://images.alphacoders.com/266/266721.jpg')
            backImages.push('https://wallpapercave.com/wp/wp3552314.jpg')
            backImages.push('https://img5.goodfon.com/wallpaper/nbig/f/f9/prizraki-prokliatoe-mesto-tuman-v-lesu-noch-dukhi-prividenii.jpg')
            backImages.push('https://vistapointe.net/images/ghosts-4.jpg')
            sec2.style.backgroundImage = `url('${backImages[0]}')`
            break;

    }

    texto = `Era uma vez em lugar chamado ${local.value} havia lá um habitante que se chamava ${nome.value}, ele era um ${especie.value} muito alegre, até que foi chegada a era dos ${monstros.value}, que foi causada em ${data.getFullYear()} por uma ${acidente.value} que fazia com que os humanos pertos se tornassem ${monstros.value}, criaturas sem qualquer tipo de consciência, suas únicas motivações eram comer ${especie.value} e dançar break. O ${especie.value} se viu obrigado a aprender técnicas de combate aprimoradas, até que encontrou uma ${armamento.value}, ferramenta que ele utilizou por décadas no combate destes ${monstros.value}, até que um dia aprendeu uma magia capaz de trazer os ${monstros.value} de volta a sanidade mental, esses por sua vez não esqueceram como dançar break... Fim".`


    function changeBG() {
        var randomBack = Math.floor(Math.random() * backImages.length);
        sec2.style.backgroundImage = `url('${backImages[randomBack]}')`;
    }

    function typeWriter() {
        if (i < texto.length) {
            textcontent.innerHTML += texto.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }


    setInterval(changeBG, 10000);

    setTimeout(typeWriter, 50);


})