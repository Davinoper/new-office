function loga(){

    var poeLogin = document.querySelector('#login');
    var poeSenha = document.querySelector('#senha');

    if(poeLogin.value == "admin" && poeSenha.value == "admin")
    {
        window.location.href = "https://www.youtube.com/";
    }
    else
    {
        console.log("senha ou usuário inválidos");
        window.alert("Senha ou usuário inválidos");
    }
    
    
    
}