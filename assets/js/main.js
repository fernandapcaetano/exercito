const form_button = document.querySelector("#form_button").addEventListener("click", form);
const erro_form = document.querySelector(".aviso");	
let erro = " ";


function form() {
    var valueCPF = document.querySelector("input#cpf").value;
    validarCPF(valueCPF);

}

function validarCPF(valueCPF) {
        valueCPF = valueCPF.replace(/[^\d]+/g,'');
        if (valueCPF === ""){
            erro = "Insira o CPF";
        }
        else if (valueCPF.length != 11 ||
            valueCPF == "00000000000" ||
            valueCPF == "11111111111" ||
            valueCPF == "22222222222" ||
            valueCPF == "33333333333" ||
            valueCPF == "44444444444" ||
            valueCPF == "55555555555" ||
            valueCPF == "66666666666" ||
            valueCPF == "77777777777" ||
            valueCPF == "88888888888" ||
            valueCPF == "99999999999"){
            erro = "CPF Inválido";
        }
        erro_form.innerText = "Atenção: " + erro;
        
        soma = 0;
        dig1 = 0;
        modulo = 0;
        for (let i = 0; i < 9; i++) {
            soma += valueCPF[i] * (10-i);
            dig1 = soma;
            modulo = (dig1 * 10) % 11;
            console.log ("Módulo : " + modulo)  
        }
}


function dataNascimento() {

}