// PUXAR O FEED DE DENUNCIAS

fetch("Blocos/FeedDenunciasUsu.html")
.then((resposta) => resposta.text())
.then((dados) => {
    document.getElementById('feed').innerHTML = dados;
})

//Puxar filtro para Feed de Denúncias
fetch('../Acessibilidade/filtroDenuncias.html')
.then((resposta) => resposta.text())
.then((dados) => {
    document.getElementById('filtros').innerHTML = dados;
})