
//class contato

class contato {

    constructor(nome,  email, telefone, contato, texto){
        this.nome = nome
        this.email = email
        this.telefone = telefone 
        this.contato = contato
        this.texto = texto
    }
    
}

function Post(form) {

  let data = new contato(form.elements.namedItem("nome").value,
            form.elements.namedItem("email").value, 
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("contato").value,
            form.elements.namedItem("texto").value);

            console.log(data)
            Enviar()
            form.reset();
}

    
function Enviar() {

    let nome = document.getElementById("nomeid");
    
    if (nome.value != "") {
        alert('Obrigado pessoa usuaria ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }
    
};