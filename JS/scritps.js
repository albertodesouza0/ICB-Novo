function formatarCPF(campo) {
    let cpf = campo.value.replace(/\D/g, ""); // Remove tudo que não for número

    if (cpf.length > 3) cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    if (cpf.length > 6) cpf = cpf.replace(/(\d{3})\.(\d{3})(\d)/, "$1.$2.$3");
    if (cpf.length > 9) cpf = cpf.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3-$4");

    campo.value = cpf;
}


var btnSalvar = document.querySelector("#cadastrar");

console.log(btnSalvar)