// PUXAR O FEED DE DENUNCIAS

fetch("/componentes/usuario/feedDenunciasUsu.html")
.then((resposta) => resposta.text())
.then((dados) => {
    document.getElementById('feed').innerHTML = dados;
})