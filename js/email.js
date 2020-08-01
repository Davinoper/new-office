function email(){
    var mensagem = document.getElementById("comentarios").value;
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("fone").value;
    console.log(mensagem)
    window.location.href = "mailto:newoffice@gmail.com? Subject: cu &body= Nome: " + nome + ", "  + " telefone:" + telefone + ", " + mensagem;
} 