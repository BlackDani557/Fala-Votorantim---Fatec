// puxar o header

// BUSCAR PÁGINA
fetch('acessibilidade/HeaderUsu.html')

//TRANSFORMAR EM TEXTO O QUE ESTÁ NA PÁGINA
.then((response) => response.text())

// PEGAR A PARTE DE "response" TRANSFORMAR EM "dados" E 
// AO USUARIO CLICAR EM ALGO COM ID "header" ELE VAI PUXAR
// O QUE TEM NO "dados"
.then((dados) => {
    document.getElementById('header').innerHTML = dados;
});

// puxar o footer

// BUSCAR PÁGINA
fetch('Acessibilidade/FooterUsu.html')

//TRANSFORMAR EM TEXTO O QUE ESTÁ NA PÁGINA
.then((resposta) => resposta.text())

// PEGAR A PARTE DE "response" TRANSFORMAR EM "dados" E 
// AO USUARIO CLICAR EM ALGO COM ID "header" ELE VAI PUXAR
// O QUE TEM NO "dados"
.then((dadosR) =>
{
    document.getElementById('footer').innerHTML = dadosR;
})


// PUXAR O FEED DE DENUNCIAS

fetch("Blocos/FeedDenunciasUsu.html")
.then((resposta) => resposta.text())
.then((dados) => {
    document.getElementById('feed').innerHTML = dados
})