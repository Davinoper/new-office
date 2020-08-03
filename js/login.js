function loga(){

    var poeLogin = document.getElementById('login').value;
    console.log(poeLogin)
    var poeSenha = document.getElementById('senha').value;
    console.log(poeSenha)

    if(poeLogin == "admin" && poeSenha == "admin")
    {
        window.location.href= "admin.html";
    }
    else
    {
        console.log("senha ou usuário inválidos");
        window.alert("Senha ou usuário inválidos");
    }
    
    
    
}