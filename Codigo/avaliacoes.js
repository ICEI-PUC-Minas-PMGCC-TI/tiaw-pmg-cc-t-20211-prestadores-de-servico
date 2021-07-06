function leDados () {
    let strDados = localStorage.getItem('avaliacoes');
    let objDados = {};
    if (strDados) {
        objDados = JSON.parse (strDados);
    }
    else {
        objDados = { avaliacao: [ {nome:"Jorge Cleyton", descricao:"Serviço de qualidade", avaliacao:"5" },
                                 {nome:"Leonardo soft", descricao:"Muito bom", avaliacao:"4" },
                                 {nome:"Marcio jesus", descricao:"Serviço bom, mas o prestador é mal educado", avaliacao:"3"} ]
                   }
    }
     return objDados;
}

function salvaDados (dados) {
    localStorage.setItem ('avaliacoes',JSON.stringify (dados));
}

function incluirContato () {
      // ler os dados do localStorage
      let objDados = leDados();


      //Incluir um novo contato
      let strNome = document.getElementById ('campoNome').value;
      let strDescricao = document.getElementById ('campoDescricao').value;
      let strAvaliacao = document.getElementById ('campoAvaliacao').value;
      let novoContato = {
        nome: strNome,
        descricao: strDescricao,
        avaliacao: strAvaliacao
        };
        objDados.avaliacao.push (novoContato);
      //salvar os dados no localStorage novamente
      salvaDados (objDados);

      //atualiza os dados na tela
      imprimeDados();
}

function imprimeDados () {
    let tela = document.getElementById('tela');
    let strHtml = '';
    let objDados = leDados ();
    for (i=0; i<objDados.avaliacao.length; i++){

        strHtml += `<div class="card col-lg-3 col-md-6 col-sm-12">
        <h5 class="card-title">${objDados.avaliacao[i].avaliacao} ESTRELAS</h5>
            <div class="card-body">
                <h5 class="card-title">${objDados.avaliacao[i].nome}</h5>
                <p class="card-text">${objDados.avaliacao[i].descricao}</p>
            </div>
        </div>`
    }

    tela.innerHTML = strHtml;

}

// Configura os botões

//document.getElementById ('btnCarregarDados').addEventListener ("click", imprimeDados);
//document.getElementById ('btnIncluirContato').addEventListener ("click", incluirContato);
