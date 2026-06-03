  ////////////////
 //puxar o feed//
////////////////

fetch('/../componentes/geral/feedDenunciasGerais.html')
.then((resposta) => resposta.text())
.then((dados) =>
{
    document.getElementById('FeedDenuncias').innerHTML = dados;
})

