
//class contato

class contato {

    constructor(nome,  email, telefone, contato){
        this.nome = nome
        this.email = email
        this.telefone = telefone 
        this.contato = contato
    }
    
}

function Post(form) {

  let data = new contato(form.elements.namedItem("nome").value,
            
            form.elements.namedItem("email").value, 
         
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("contato").value);


            console.log(data)

            form.reset();
}

    
function Enviar() {

    let nome = document.getElementById("nomeid");
    
    if (nome.value != "") {
        alert('Obrigado pessoa usuaria ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }

}