//PEGAR SÓ O HEADER

// pegar a pasta
fetch("acessibilidade/menuLateral.html")

//transforma em texto
.then((resposta) => resposta.text())

// PEGAR A PARTE DE "response" TRANSFORMAR EM "dados" E 
// AO USUARIO CLICAR EM ALGO COM ID "header" ELE VAI PUXAR
// O QUE TEM NO "dados"
.then((dados) => {
    document.getElementById("menuLateral").innerHTML = dados
})


// PEGAR SOMENTE O FOOTER

fetch("acessibilidade/Footer.html")
.then((Respostas) => Respostas.text())
.then((dadosF) => {
    document.getElementById('footer').innerHTML = dadosF;
})



// PEGAR O CADASTRO DE DENUNCIAS

fetch("Blocos/CadastroDenuncia.html")
.then((resposta) => resposta.text())
.then((dados) => {
    document.getElementById('feed').innerHTML = dados;
})

// PEGAR O FEED DE DENUNCIAS

fetch("Blocos/FeedDenunciasADM.html")
.then((resposta) => resposta.text())
.then((dados) => {
    document.getElementById('FeedDenuncias').innerHTML = dados;
})