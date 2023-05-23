const form_button = document.querySelector("#form_button").addEventListener("click", form);
const erro_form = document.querySelector(".aviso");


function form() {
    erro_form.innerText = "Atenção: ";
}

function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g,'');	
}
function dataNascimento() {

}