// fazer Cadastro

// função que tem "event"
function Cadastro(e)
{
    e.preventDefault(); // não deixa a página atualizar e apagar todos os dados


    // captura dos valores passados no cadastros
    let nomeCompleto = document.getElementById('NomeCompleto').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let senha = document.getElementById('senha').value;
    let confSenha = document.getElementById('Confsenha').value;

    if(senha != confSenha)
    {
        alert("infelizmente, as senhas não coincidem");
        return;
    }

    // esse ele vai guardar TODOS os valores que foram passados bem AQUI
    let Usuarios = {
        nomeCompleto,
        email,
        telefone,
        senha,
        confSenha
    };

    // esse ele está salvando os dados diretamente no navegador do usuario(não é recomendado kkkk)
    localStorage.setItem('Usuarios', JSON.stringify(Usuarios));

    // alerta ao usuario(não vou explicar isso pois vocês já sabem o que faz kkkk)
    alert("Usuário cadastrado");
}

// função que tem "event"
function Logar(e)
{

    const arrayADM = [
        {email: "adm@gmail.com", senha: "123", role: "adm"},
        {email: "adm2@gmail.com", senha: "456", role: "adm"}
    ]
    e.preventDefault();  // não deixa a página atualizar e apagar todos os dados


    // captura os valores passados pelo usuário
    let emailDigitado = document.getElementById("email").value;
    let senhaDigitada = document.getElementById("senha").value;

    //verificar se é admin
    const ADMEncontrado = arrayADM.find(adm => adm.email === emailDigitado && adm.senha === senhaDigitada);

    if(ADMEncontrado)
    {
        alert("Olá, seja bem vindo, Admin");
        // se o if for verdadeiro, ele redireciona para a tela inicial do ADM
        window.location.href = "../ADM/TelaInicio.html";
        return;
    }

    // pega "de volta" os items que foram dados na função de cima e guarda nessa variavel
    let DadosSalvos = localStorage.getItem("Usuarios");

    if(!DadosSalvos)
    {
        alert("Usuário não encontrado. Por favor, faça o cadastro");
        window.location.href = "../Views/Cadastro.html";
        return;
    }

    let UsuarioComum = JSON.parse(DadosSalvos);

    if(emailDigitado === UsuarioComum.email && senhaDigitada === UsuarioComum.senha)
    {
        alert("Olá, seja bem vindo ao nosso site Usuário");
        window.location.href = "../Usuario/MeusDados.html";
    }
    else
    {
        alert("email ou senha incorretos");
    }
}