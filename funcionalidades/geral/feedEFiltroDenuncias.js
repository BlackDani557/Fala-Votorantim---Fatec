  ////////////////
 //puxar o feed//
////////////////

fetch('/componentes/geral/feedDenunciasGerais.html')
.then((resposta) => resposta.text())
.then((dados) =>
{
    document.getElementById('FeedDenuncias').innerHTML = dados;
})

//Puxar filtro para Feed de Denúncias
fetch('/componentes/geral/filtroDenuncias.html')
.then((resposta) => resposta.text())
.then((dados) => {
    document.getElementById('filtros').innerHTML = dados;
})