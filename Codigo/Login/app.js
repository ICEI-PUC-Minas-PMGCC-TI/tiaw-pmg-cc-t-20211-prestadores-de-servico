function leDados () {
    let strDados = localStorage.getItem('usuarios');
    let objDados = {};
    if (strDados) {
        objDados = JSON.parse (strDados);
    }
    else {
        objDados = { contatos: [ {nome:"Joao Carlos", email:"joao@joao.br", senha:"joao123"},
                                 {nome:"Pedrin ui", email:"pedrin@gmail.uol", senha:"pedrouiui"},
                                 {nome:"Dani Ablueblue", email:"dani@coelhodoido.tv", senha:"daniblue"} ]
                   }
    }
     return objDados;
}

function salvaDados (dados) {
    localStorage.setItem ('usuarios',JSON.stringify (dados));
}

function incluirContato () {
      // ler os dados do localStorage
      let objDados = leDados();


      //Incluir um novo contato
      let verifica = true;
      let strNome = document.getElementById ('campoNome').value;
      let strEmail = document.getElementById ('campoEmail').value;
      let strSenha = document.getElementById ('campoSenha').value;
      let novoContato = {
        nome: strNome,
        email: strEmail,
        senha: strSenha
        };
      if((strNome == '') ||( strEmail == '' )||( strSenha == ''))
      {
        alert('1 ou mais campos vazios');
        verifica = false;
      }
      for (i=0; i<objDados.contatos.length; i++)
      {
          if (objDados.contatos[i].email == strEmail)
          {
            alert('email ja cadastrado');
            i=objDados.contatos.length;
            verifica = false;
          }
      }
      if(verifica)
      {
        objDados.contatos.push (novoContato);
      }

      //salvar os dados no localStorage novamente
      salvaDados (objDados);

      //atualiza os dados na tela
      imprimeDados();
}

function imprimeDados () {
    let tela = document.getElementById('tela');
    let strHtml = '';
    let objDados = leDados ();
    for (i=0; i<objDados.contatos.length; i++){
        strHtml = strHtml + `<p>${objDados.contatos[i].nome} - ${objDados.contatos[i].email}</p>`
    }

    tela.innerHTML = strHtml;

}

function loginUsuario (){
   // ler os dados do localStorage
   let objDados = leDados();


   //verificar se o contato existe
   let verifica = true;
   let strEmail = document.getElementById ('campoEmailLogin').value;
   let strSenha = document.getElementById ('campoSenhaLogin').value;
   if(( strEmail == '' )||( strSenha == ''))
   {
     alert('1 ou mais campos vazios');
     verifica = false;
   }
   for (i=0; i<objDados.contatos.length; i++)
   {
       if (objDados.contatos[i].email == strEmail)
       {
         if (objDados.contatos[i].senha == strSenha)
         {
           alert('login feito com sucesso');
           verifica = true;
         }
         else {
           alert('senha incorreta');
           verifica = false;
         }
         i=objDados.contatos.length;
         verifica = false;
       }
   }
   if(verifica)
   {
     //não faz nada ainda, reservado para implementacao final
   }
}

// Configura os botões

document.getElementById ('btnCarregaDados').addEventListener ("click", imprimeDados);
document.getElementById ('btnIncluirContato').addEventListener ("click", incluirContato);
document.getElementById ('btnLoginContato').addEventListener ("click", loginUsuario);