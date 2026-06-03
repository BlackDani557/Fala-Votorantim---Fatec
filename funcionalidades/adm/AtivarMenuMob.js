const btnMenu = document.getElementById("btnMenu");
const menuLateral = document.getElementById("menuLateral");
const overlay = document.getElementById("overlay");

btnMenu.addEventListener("click", () =>
{
    menuLateral.classList.toggle("ativo");
    overlay.classList.toggle("ativo");

    if(menuLateral.classList.contains("ativo"))
    {
        btnMenu.innerHTML = "✖";
    }
    else
    {
        btnMenu.innerHTML = menuLateral.classList.contains("ativo")
    ? "✖"
    : "☰";;
    }
});

overlay.addEventListener("click", () =>
{
    menuLateral.classList.remove("ativo");
    overlay.classList.remove("ativo");

    btnMenu.innerHTML = "☰";
});