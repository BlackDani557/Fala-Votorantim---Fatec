fetch('../../componentes/usuario/MenuMobi.html')
.then((Resposta) => Resposta.text())
.then((dados) =>
{
    document.getElementById('MenuMobi').innerHTML = dados;

    const btnMenu = document.getElementById('btnMenu');
    const menu = document.getElementById('menuMobile');
    const overlay = document.getElementById('overlay');
    const fechar = document.getElementById('fecharMenu');

    btnMenu.addEventListener('click', () =>
    {
        menu.classList.add('ativo');
        overlay.classList.add('ativo');
    });

    fechar.addEventListener('click', fecharMenu);

    overlay.addEventListener('click', fecharMenu);

    function fecharMenu()
    {
        menu.classList.remove('ativo');
        overlay.classList.remove('ativo');
    }
});