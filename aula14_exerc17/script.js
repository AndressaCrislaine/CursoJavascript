function tabuada(){

    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    
    if(num.value.length == 0){
        window.alert('[ERRO] Digite um número!')
    }else{
        let n = Number(num.value)
        tab.innerHTML = ''

        for(let c = 1; c <= 50 ; c++){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}` //para usar em php por ex
            tab.appendChild(item)
        }
    }

}

function limpar(){
    document.getElementById('txtn').value = ''
    document.getElementById('seltab').value = ''

    let tab = document.getElementById('seltab')
    tab.innerHTML = ''
    let item = document.createElement('option')
    item.text = `Digite um número acima`
    tab.appendChild(item)
}