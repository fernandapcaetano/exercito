const form_button = document.querySelector("#form_button").addEventListener("click", form);
const erro_form = document.querySelector(".aviso");	
let erro = " ";


function form() {
    var valueCPF = document.querySelector("input#cpf").value;
    
    validarCPF(valueCPF);
    if (validarCPF(valueCPF) == false){
        erro_form.innerText = "Atenção: " + erro;
    }
    else{
        erro_form.innerText = " ";
    }

}

const inputCPF = document.querySelector("input#cpf");
inputCPF.addEventListener('keypress', mascaraCPF); 
function mascaraCPF() {
    let escritaCPF = inputCPF.value.length;

    if (escritaCPF === 3 || escritaCPF === 7){
        inputCPF.value += '.'
    }
    else if (escritaCPF === 11){
        inputCPF.value += '-';
    }

}
function validarCPF(valueCPF) {

        valueCPF = valueCPF.replace(/[^\d]+/g,'');
        if (valueCPF === ""){
            erro = "Insira o CPF";
            return false;
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
            return false
        }
        

        let soma1 = 0;
        for (var i = 0; i < 9; i++){
            soma1 += valueCPF[i] * (10-i);
        }
        soma1 = (soma1 * 10) % 11;
        console.log("Primeiro: " + soma1);
        if (soma1 == 10 || soma1 == 11){
            soma1 = 0;
        }
        if (soma1 != valueCPF[9]) {
            erro = "CPF inválido, digite novamente."
            return false;
        }

        let soma2 = 0;
        for (var i = 0; i < 10; i++){
            soma2 += valueCPF[i] * (11-i);
        }
        soma2 = (soma2 * 10) % 11;
        console.log("segundo "+ soma2);
        if (soma2 == 10 || soma2 == 11){
            soma2 = 0;
        }
        if (soma2 != valueCPF[10]) {
            erro = "CPF inválido, digite novamente."
            return false;
        }
        
        erro_form.innerText = erro;
    

}



const inputDataNasc = document.querySelector("input#nascimento");
inputDataNasc.addEventListener('keypress', dataNascimento); 
function dataNascimento() {
    let escritaDataNasc = inputDataNasc.value.length;

    if (escritaDataNasc === 2 || escritaDataNasc === 5){
        inputDataNasc.value += '/'
    }
    

}
