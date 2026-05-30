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
        {email: "adm@gmail.com", senha: "123"},
        {email: "adm2@gmail.com", senha: "456"}
    ]
    e.preventDefault();  // não deixa a página atualizar e apagar todos os dados


    // captura os valores passados pelo usuário
    let emailDigitado = document.getElementById("email").value;
    let senhaDigitada = document.getElementById("senha").value;


    // pega "de volta" os items que foram dados na função de cima e guarda nessa variavel
    let DadosSalvos = localStorage.getItem("Usuarios");


    // se não existir as infos passadas, então ele dá o alert
    if(!DadosSalvos)
    {
        // alerta o usuário(esse tbm n vou explicar pois vocês já sabem kkk)
        alert("Usuario não encontrado, por favor, volte para o Cadastro");
        return;
    }

    let usuarios = JSON.parse(DadosSalvos);

    // se as infos capturadas pelas respectivas váriaveis, for identicas ao que tem guardado em 
    // uma espécie de array dentro do navegador do usuario, então ele dá o alerta
    if(emailDigitado === usuarios.email && senhaDigitada === usuarios.senha)
    {
        // alerta o usuário(esse tbm n vou explicar pois vocês já sabem kkk)
        alert("Você está logado!!");

        // se o if for verdadeiro, ele redireciona para a tela inicial do ADM
        window.location.href = "../ADM/TelaInicio.html"
    }
}


// OBS.: ESSAS FUNÇÕES NÃO DIFERENCIAM ENTRE ADM E USUÁRIO
// PRINCIPALMENTE O LOGAR, ENTÃO NÃO IMPORTA SE O CADASTRO FOI DE 
// ADM OU USARIO, ELE SEMPRE IRÁ PARA A TELA INICIAL DO ADM