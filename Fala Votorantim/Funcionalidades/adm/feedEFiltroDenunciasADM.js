// PEGAR O FEED DE DENUNCIAS

fetch("Blocos/feedDenunciasAdm.html")
.then((resposta) => resposta.text())
.then((dados) => {
    document.getElementById('FeedDenuncias').innerHTML = dados;
})

//Puxar filtro para Feed de Denúncias
fetch('../Acessibilidade/filtroDenuncias.html')
.then((resposta) => resposta.text())
.then((dados) => {
    document.getElementById('filtros').innerHTML = dados
})