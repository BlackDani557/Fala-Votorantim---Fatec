// puxar o header

// BUSCAR PÁGINA
fetch('../Acessibilidade/Header.html')

//TRANSFORMAR EM TEXTO O QUE ESTÁ NA PÁGINA
.then((response) => response.text())

// PEGAR A PARTE DE "response" TRANSFORMAR EM "dados" E 
// AO USUARIO CLICAR EM ALGO COM ID "header" ELE VAI PUXAR
// O QUE TEM NO "dados"
.then((dados) => {
    document.getElementById('header').innerHTML = dados;
});


  ///////////////////
 // puxar o footer /
///////////////////

// BUSCAR PÁGINA
fetch('../Acessibilidade/Footer.html')

//TRANSFORMAR EM TEXTO O QUE ESTÁ NA PÁGINA
.then((resposta) => resposta.text())

// PEGAR A PARTE DE "response" TRANSFORMAR EM "dados" E 
// AO USUARIO CLICAR EM ALGO COM ID "header" ELE VAI PUXAR
// O QUE TEM NO "dados"
.then((dadosR) =>
{
    document.getElementById('footer').innerHTML = dadosR;
})

