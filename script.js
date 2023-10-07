var produtos = [];

function cadastrarProduto() {
  var nome = document.getElementById('nome').value;
  var quantidade = parseInt(document.getElementById('quantidade').value);
  var valor = parseFloat(document.getElementById('valor').value);
//   listarEstoque();
//   limparFormulario();

  var produto = {
    nome: nome,
    quantidade: quantidade,
    valor: valor
  };

  produtos.push(produto); //insere itens ao final do array, alterando o array original

  atualizarEstoque();
  listarEstoque()
  limparFormulario();
}

function baixarProduto() {
  var nome = document.getElementById('nome-baixa').value;
  var quantidade = parseInt(document.getElementById('quantidade-baixa').value);

  for (var i = 0; i < produtos.length; i++) {
    if (produtos[i].nome === nome) {
      if (produtos[i].quantidade >= quantidade) {
        produtos[i].quantidade -= quantidade;
        atualizarEstoque();
        limparFormulario();
        listarEstoque()
        return;
      } else {
        alert('Quantidade insuficiente para a baixa.');
        return;
      }
    }
  }

  alert('Produto não encontrado.');
}

function atualizarEstoque() {
  var estoqueBody = document.getElementById("estoque-atualizado-body");
  estoqueBody.innerHTML = '';
  

  for (var i = 0; i < produtos.length; i++) {
    var produto = produtos[i];
    var row = document.createElement('tr');
    row.innerHTML = '<td>' + produto.nome + '</td>' +
                    '<td>' + produto.quantidade + '</td>' +
                    '<td>' + produto.valor.toFixed(2) + '</td>';
    estoqueBody.appendChild(row);
  }
  limparFormulario();
}

// function listarEstoque() {
//     // Obtém o elemento HTML onde você deseja exibir o estoque
//     var elementoEstoque = document.getElementById('estoque');
  
//     // Limpa o conteúdo atual do elemento
//     elementoEstoque.innerHTML = '';
  
//     // Percorre a lista de produtos cadastrados
//     for (var i = 0; i < produtos.length; i++) {
//       var produto = produtos[i];
  
//       // Cria uma linha da tabela para cada produto
//       var linha = document.createElement('tr');
  
//       // Cria as células da tabela com as informações do produto
//       var colunaNome = document.createElement('td');
//       colunaNome.textContent = produto.nome;
//       linha.appendChild(colunaNome);
  
//       var colunaQuantidade = document.createElement('td');
//       colunaQuantidade.textContent = produto.quantidade;
//       linha.appendChild(colunaQuantidade);
  
//       var colunaValor = document.createElement('td');
//       colunaValor.textContent = produto.valor;
//       linha.appendChild(colunaValor);
  
//       // Adiciona a linha à tabela do estoque
//       elementoEstoque.appendChild(linha);
//     }
//   }
  
function listarEstoque() {
    var estoqueBody = document.getElementById("estoque-body");
    estoqueBody.innerHTML = ""; // Limpa o conteúdo atual do tbody
  
    for (var i = 0; i < produtos.length; i++) {
      var produto = produtos[i];
      var row = document.createElement("tr");
      var nomeCell = document.createElement("td");
      var quantidadeCell = document.createElement("td");
      var valorCell = document.createElement("td");
  
      nomeCell.textContent = produto.nome;
      quantidadeCell.textContent = produto.quantidade;
      valorCell.textContent = produto.valor;
  
      row.appendChild(nomeCell);
      row.appendChild(quantidadeCell);
      row.appendChild(valorCell);
  
      estoqueBody.appendChild(row);
    }
  }
  
function limparFormulario() {
  document.getElementById('nome').value = '';
  document.getElementById('quantidade').value = '';
  document.getElementById('valor').value = '';
  document.getElementById('nome-baixa').value = '';
  document.getElementById('quantidade-baixa').value = '';
}

// function limparFormulario() {
//     document.getElementById("nome").value = "";
//     document.getElementById("quantidade").value = "";
//     document.getElementById("valor").value = "";
//   }
  
