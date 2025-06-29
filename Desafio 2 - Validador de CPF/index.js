cpf = prompt();

function validarCPF(cpf) {
    digitos = cpf.replace(/\D/g, '').split('');
    if(digitos.length === 11){
        console.log("CPF válido");
    }
    else{
        return console.log("CPF inválido");
    }
}