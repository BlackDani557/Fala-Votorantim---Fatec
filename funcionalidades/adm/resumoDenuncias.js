// PEGAR O RESUMO DO FEED   

fetch("/componentes/adm/resumoFeed.html")
.then((resposta) => resposta.text())
.then((dados) => {
    document.getElementById('resumoDenuncias').innerHTML = dados;
})
