//Puxar filtro para Feed de Denúncias
fetch('/componentes/geral/filtroDenuncias.html')
.then((resposta) => resposta.text())
.then((dados) => {
    document.getElementById('filtros1').innerHTML = dados;
    document.getElementById('filtros2').innerHTML = dados;
})