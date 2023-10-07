var produtos = [];

function cadastrarProduto() {
  var nome = document.getElementById('nome').value;
  var quantidade = parseInt(document.getElementById('quantidade').value);
  var valor = parseFloat(document.getElementById('valor').value);
  limparFormulario();

  var produto = {
    nome: nome,
    quantidade: quantidade,
    valor: valor
  };

  produtos.push(produto);

  atualizarEstoque();
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
        listarEstoque();
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
  var estoqueBody = document.getElementById('estoque-body');
  estoqueBody.innerHTML = '';

  for (var i = 0; i < produtos.length; i++) {
    var produto = produtos[i];
    var row = document.createElement('tr');
    row.innerHTML =
      '<td>' + produto.nome + '</td>' +
      '<td>' + produto.quantidade + '</td>' +
      '<td>' + produto.valor.toFixed(2) + '</td>';
    estoqueBody.appendChild(row);
  }
}

function listarEstoque() {
  var estoqueAtualizadoBody = document.getElementById('estoque-atualizado-body');
  estoqueAtualizadoBody.innerHTML = '';

  for (var i = 0; i < produtos.length; i++) {
    var produto = produtos[i];
    var row = document.createElement('tr');
    row.innerHTML =
      '<td>' + produto.nome + '</td>' +
      '<td>' + produto.quantidade + '</td>' +
      '<td>' + produto.valor.toFixed(2) + '</td>';
    estoqueAtualizadoBody.appendChild(row);
  }
}

function limparFormulario() {
  document.getElementById('nome').value = '';
  document.getElementById('quantidade').value = '';
  document.getElementById('valor').value = '';
  document.getElementById('nome-baixa').value = '';
  document.getElementById('quantidade-baixa').value = '';
}






















// var produtos = [];

// function cadastrarProduto() {
//     var nome = document.getElementById('nome').value;
//     var quantidade = parseInt(document.getElementById('quantidade').value);
//     var valor = parseFloat(document.getElementById('valor').value);
//     limparFormulario();
  
//     var produto = {
//       nome: nome,
//       quantidade: quantidade,
//       valor: valor
//     };
  
//     produtos.push(produto);
  
//     atualizarEstoque(); // Corrigido para chamar a função atualizarEstoque() em vez de listarEstoque()
//     limparFormulario();
//   }
  
//   function baixarProduto() {
//     var nome = document.getElementById('nome-baixa').value;
//     var quantidade = parseInt(document.getElementById('quantidade-baixa').value);
  
//     for (var i = 0; i < produtos.length; i++) {
//       if (produtos[i].nome === nome) {
//         if (produtos[i].quantidade >= quantidade) {
//           produtos[i].quantidade -= quantidade;
//           atualizarEstoque();
//           limparFormulario();
//           listarEstoque()
//           return;
//         } else {
//           alert('Quantidade insuficiente para a baixa.');
//           return;
//         }
//       }
//     }
  
//     alert('Produto não encontrado.');
//   }
  
//   function atualizarEstoque() {
//     var estoqueBody = document.getElementById("estoque-atualizado-body");
//     estoqueBody.innerHTML = '';
    
  
//     for (var i = 0; i < produtos.length; i++) {
//       var produto = produtos[i];
//       var row = document.createElement('tr');
//       row.innerHTML = '<td>' + produto.nome + '</td>' +
//                       '<td>' + produto.quantidade + '</td>' +
//                       '<td>' + produto.valor.toFixed(2) + '</td>';
//       estoqueBody.appendChild(row);
//     }
//     limparFormulario();
//   }
      
//   function listarEstoque() {
//       var estoque = document.getElementById("estoque-body");
//       estoque.innerHTML = ""; // Limpa o conteúdo atual do tbody
    
//       for (var i = 0; i < produtos.length; i++) {
//         var produto = produtos[i];
//         var row = document.createElement("tr");
//         var nomeCell = document.createElement("td");
//         var quantidadeCell = document.createElement("td");
//         var valorCell = document.createElement("td");
    
//         nomeCell.textContent = produto.nome;
//         quantidadeCell.textContent = produto.quantidade;
//         valorCell.textContent = produto.valor;
    
//         row.appendChild(nomeCell);
//         row.appendChild(quantidadeCell);
//         row.appendChild(valorCell);
    
//         estoque.appendChild(row);
//       }
//     }
    
//   function limparFormulario() {
//     document.getElementById('nome').value = '';
//     document.getElementById('quantidade').value = '';
//     document.getElementById('valor').value = '';
//     document.getElementById('nome-baixa').value = '';
//     document.getElementById('quantidade-baixa').value = '';
//   }
  
