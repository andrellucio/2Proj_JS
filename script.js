var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.querySelector('div#res') // Busca o ID resultado

function verificar()

    {
        if(fano.value.length == 0 || Number(fano.value) > ano)  //verifica se a cx está vazia e se é > ano
        {   window.alert(' [ERRO] Verifique os dados e tente novamente!')    

         } else {
        // não se consegue usar o ID ou seletor. Pq é obrigado a selecionar uma das opções
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''  //começa com string vazio
        var img = document.createElement('img')//Gerar a imagem - Criando tag
        // é igual feito em html  <img id = 'foto' >
        img.setAttribute('id', 'foto')


        // se for masc [0] estiver marcado então é masc
        if (fsex[0].checked) {  
            genero = 'Homem'
            if (idade >=0 && idade <10){
                //Criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
               //Idoso
               img.setAttribute('src', 'foto-idoso-m.png')
            }
        }    
             
        else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <10){
                //Criança
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
               //Idoso
               img.setAttribute('src' , 'foto-idoso-f.png' )
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) //detecta o elemento imagem - mostra na tela
     }
    
    }



