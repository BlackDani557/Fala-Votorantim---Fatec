//Puxar filtro para Feed de Denúncias
fetch('../../componentes/geral/filtroDenuncias.html')
.then((resposta) => resposta.text())
.then((dados) => {
    document.getElementById('filtros').innerHTML = dados;
})