function contar(){
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados!')

    }else{
        res.innerHTML = 'Contando: <br>'
        //let é igual var
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0){ 
            window.alert('Passo inválido! Consideranto Passo = 1')
            p = 1
        }

        if(i < f){
            for(let c = i; c <= f; c += p ){

                res.innerHTML += ` ${c} \u{1F449}`
            }
        }else{
            for(let c = i; c >= f; c -= p ){

                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }

}

function limpar(){
    document.getElementById('txti').value = ''
    document.getElementById('txtf').value = ''
    document.getElementById('txtp').value = ''    
}