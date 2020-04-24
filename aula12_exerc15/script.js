function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
        limpar()
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        
        if(fsex[0].checked){
                       
            genero = 'homem'
            if(idade >=0 && idade < 3){
                //Bebê
                genero = 'menino'
                img.setAttribute('src','images/bebe_menino.png')
                
            } else if(idade >= 3 && idade <= 12){                
                //Criança
                genero = 'menino'
                img.setAttribute('src','images/crianca_menino.png')
            } else if(idade < 18){
                // Adolescente
                genero = 'menino'
                img.setAttribute('src','images/adolescente_menino.png')
            } else if(idade < 35){
                //Jovem
                img.setAttribute('src','images/jovem_homem.png')
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src','images/homem.png')
            }else{
                //Idoso
                img.setAttribute('src','images/idoso.png')
            }

        }else if(fsex[1].checked){
            genero = 'mulher'
            if(idade >=0 && idade < 3){
                //Bebê
                genero = 'menina'
                img.setAttribute('src','images/bebe_menina.png')
            } else if(idade <= 12){
                //Criança
                genero = 'menina'
                img.setAttribute('src','images/crianca_menina.png')
            } else if(idade < 18){
                // Adolescente
                genero = 'menina'
                img.setAttribute('src','images/adolescente_menina.png')
            } else if(idade < 35){
                //Jovem
                img.setAttribute('src','images/jovem_mulher.png')
            } else if(idade < 50){
                //Adulto
                img.setAttribute('src','images/mulher.png')
            }else{
                //Idoso
                img.setAttribute('src','images/idosa.png')
            }
        }


        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} ano(s).`
        res.appendChild(img)
    }
}

function limpar(){
    document.getElementById('txtano').value = ''
    document.getElementsByName('radsex')[0].checked = true
    document.getElementsByName('radsex')[1].checked = false
}