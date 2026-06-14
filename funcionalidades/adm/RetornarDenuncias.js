fetch('/componentes/adm/RetornarDenuncias.html')
.then((resposta) => resposta.text())
.then((dados) => {
    document.getElementById("RetornarDenuncias").innerHTML = dados;
})