// PEGAR O FEED DE DENUNCIAS

fetch("/componentes/adm/feedDenunciasAdm.html")
.then((resposta) => resposta.text())
.then((dados) => {
    document.getElementById('FeedDenuncias').innerHTML = dados;
})

