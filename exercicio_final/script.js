let num = document.querySelector('input#fnumero')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let numeros = []

function adicionarNumero(){

    if(isNumero(num.value) && !inLista(num.value, numeros)){
        numeros.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('[ERRO] O número é inválido ou já existe na lista!')
    }
    limpar()
}

function isNumero(n){

    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){

    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function finalizar(){

    if(numeros.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }else{

        let total = numeros.length

        let maior = numeros[0]
        let menor = numeros[0]
        let soma = 0
    
        //Verifica valor menor, maior e soma
        for(let pos in numeros){

            if(numeros[pos] > maior){
                maior = numeros[pos]
            }
            if(numeros[pos] < menor){
                menor = numeros[pos]
            }
            soma += numeros[pos]
        }
        //calcular media
        let media = soma/total

        res.innerHTML = ''
        res.innerHTML +=  `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML +=  `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML +=  `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML +=  `<p>Somando todos os valores, o total é ${soma}.</p> `
        res.innerHTML +=  `<p>A média de todos os valores é ${media}.</p> `
    }
}

function limpar(){

    num.value = ''
    num.focus()
}

