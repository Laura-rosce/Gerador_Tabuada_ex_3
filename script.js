function gerarTabuada(){
    
    var number = document.getElementById('num')
    var res = document.querySelector('textarea#txtTab')
    res.innerHTML = ' '
    
    var numero = Number(number.value)

    if (number.value.length != 0){
        for (var i=1; i<=10; i++){
            res.innerHTML += `\n ${i} x ${numero} = ${i*numero}`
        }
    } else {
        alert ('Informe algum numero!')
    }

    
}