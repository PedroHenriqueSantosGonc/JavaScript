function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('itxtano');
    var res = document.getElementById('res');

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Ano Invalido');
    }
    else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if(fsex[0].checked){
            genero = 'Homem'

            if(idade >= 10 && idade < 10){
                //bebe
                img.setAttribute('src', 'imagens/Bebe-menino-250.png')
            }
            else if(idade < 21){
                //criança
                img.setAttribute('src', 'criança menino 250.png')
            }
            else if(idade < 50){
                //jovem
                img.setAttribute('src', 'imagens/jovem homem 250.png')
            }
            else{
                //idoso
                img.setAttribute('src', 'imagens/idoso 250.png')
            }

        }
        else if(fsex[1].checked){
            genero = 'Mulher'

            if(idade >= 10 && idade < 10){
                //Criança
            }
            else if(idade < 21){
                //jovem
            }
            else if(idade < 50){
                //adulto
            }
            else{
                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
    

}