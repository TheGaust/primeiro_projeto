const form = document.getElementById('form-deposito');
const nomebeneficiario = document.getElementById('nome-beneficiario');
let formevalido = false;

function valida(val1, val2) {
    return val2 > val1;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const valor1 = document.getElementById('valorone');
    const valor2 = document.getElementById('valortwo');
    const mensagemSucesso = `Parabéns o Valor 2 é maior que o valor 1`;
    const mensagemFracasso = `Infelizmente o valor 1 é maior que o valor 2`;

    formevalido = valida(valor1.value, valor2.value)
    if (formevalido) {
        const containermensagemsucesso = document.querySelector('.sucess-message');
        containermensagemsucesso.innerHTML = mensagemSucesso;
        containermensagemsucesso.style.display = 'block';

        nomebeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';
    } else {
        const containermensagemsucesso = document.querySelector('.fail-message');
        containermensagemsucesso.innerHTML = mensagemFracasso;
        containermensagemsucesso.style.display = 'block';
        nomebeneficiario.style.border = '1px solid red'
        document.querySelector('.error-message').style.display = 'block';
    }
});