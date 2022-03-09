function calculaIMC() {
    const form = document.querySelector('form#formulario')
    form.addEventListener('submit', function(event) {
        event.preventDefault();
    });

    let peso = document.querySelector('input#peso')
    let altura = document.querySelector('input#altura')
    let res = document.querySelector('div#res')

    peso = Number(peso.value)
    altura = Number(altura.value)

    var imc = peso / (altura * altura)
    validaFormulario(peso, altura, imc, res)
}

function validaFormulario(peso, altura, imc, res) {
    if (peso == '' && altura == '') {
        res.innerHTML = `<p>Valores inválidos, favor preencher os campos!</p>`
        res.classList.add('invalido')
    }
    else if(peso == '') {
        res.innerHTML = `<p>Peso inválido!`
    }
    else if (altura == '') {
        res.innerHTML = `<p>Altura inválida!`
    } else {
        exibeResultado(imc, res)
    }    
}

function exibeResultado(imc, res) {
    res.classList.remove('invalido')
    res.classList.add('resultado')
        if (imc < 18.5){
            res.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Abaixo do peso)</p>`
        }
        else if (imc >= 18.5 && imc <=24.9) {
            res.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Peso Normal)</p>`
        }
        else if (imc <= 29.9) {
            res.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Sobrepeso)</p>`
        }
        else if (imc <= 34.9) {
            res.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Obesidade grau 1)`
        }
        else if (imc <= 39.9) {
            res.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Obesidade grau 2)`
        } else {
            res.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)} (Obesidade grau 3)</p>`
        }
}