
function frete(){
    var opcao = document.getElementById('opcoes').value;
    console.log(opcao);
    var peso = document.getElementById('pp').value;
    console.log(peso);
    var distancia = document.getElementById('pd').value;
    console.log(distancia);
    if(opcao == "norm")
    {
        var calculo = (peso * 2) + (distancia * 0.32);
        console.log(calculo);
        var valor = document.querySelector('#resultado');
    }
    else if(opcao == "ex")
    {
        var calculo = peso * 2 + distancia * 0.76;
        console.log(calculo);
        var valor = document.querySelector('#resultado');
    }
    
    if(distancia > 0 & distancia <= 1000 & opcao == "norm")
    {
        var prazo = document.querySelector('#dias');
        prazo.textContent = "4 dias úteis";
        var dias = prazo.textContent;
    }
    else if(distancia > 1000 & distancia <= 2000 & opcao == "norm")
    {
        var prazo = document.querySelector('#dias');
        prazo.textContent = "6 dias úteis";
        var dias = prazo.textContent;
    }
    else if(distancia > 2000 & opcao == "norm")
    {
        var prazo = document.querySelector('#dias');
        prazo.textContent = "8 dias úteis";
        var dias = prazo.textContent;
    }

    if(distancia <= 1000 & opcao == "ex")
    {
        var prazo = document.querySelector('#dias');
        prazo.textContent = "2 dias úteis";
        var dias = prazo.textContent;
    }
    else if(distancia > 1000 & distancia <= 2000 & opcao == "ex")
    {
        var prazo = document.querySelector('#dias');
        prazo.textContent = "3 dias úteis";
        var dias = prazo.textContent;
    }
    else if(distancia > 0 & distancia > 2000 & opcao == "ex")
    {
        var prazo = document.querySelector('#dias');
        prazo.textContent = "4 dias úteis";
        var dias = prazo.textContent;
    }

    valor.textContent = calculo;
}

