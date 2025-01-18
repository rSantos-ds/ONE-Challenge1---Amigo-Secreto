// Declaração do array para armazenar os nomes
let listaNomes = [];

// Função para adicionar nomes no array
function adicionarAmigo() {
  let campoNome = document.querySelector("#amigo");
  let nome = campoNome.value.toUpperCase();

  //   Validação se o campo esta vazio e se o nome já consta na lista
  if (nome == "") {
    alert("Campo vazio, por favor preencha com um nome ou valor!");
  } else if (listaNomes.includes(nome)) {
    alert("Nome repetido, insira outro!");
  } else {
    listaNomes.push(nome);
    campoNome.value = "";
    campoNome.ariaPlaceholder = "Digite um nome";
    atualizarLista();
  }
}

// Função para atualizar a lista de nomes na tela
function atualizarLista() {
  let aviso = document.querySelector("#mensagem-deletar");
  if (listaNomes.length > 0) {
    aviso.innerHTML = "Clique sobre o nome para remover da lista";
  } else {
    aviso.innerHTML = "";
  }

  listaNomes = listaNomes.sort();

  let lista = document.querySelector("#listaAmigos");
  lista.innerHTML = "";
  for (var i = 0; i < listaNomes.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = listaNomes[i];
    li.setAttribute("onclick", "deletarAmigo(this)");
    lista.appendChild(li);
  }
}

//Função para fazer suspense ao sortear
function suspense() {
  let resultado = document.querySelector("#resultado");
  setTimeout(() => {
    resultado.innerHTML = "Sorteando .";
  }, 200);

  setTimeout(() => {
    resultado.innerHTML = "Sorteando ..";
  }, 400);

  setTimeout(() => {
    resultado.innerHTML = "Sorteando ...";
  }, 600);
}

// Função para sortear um amigo
function sortearAmigo() {
  if (listaNomes.length > 0) {
    suspense();
    let numero = Math.floor(Math.random() * listaNomes.length);
    let nomeSorteado = listaNomes[numero];
    let resultado = document.querySelector("#resultado");

    setTimeout(() => {
      resultado.innerHTML = "Amigo sorteado: " + nomeSorteado;
    }, 1000);
  } else {
    alert("Insira nomes na lista para sortear!");
  }
}

// Função deletar amigo da lista
function deletarAmigo(nomeAmigo) {
  let posicao = listaNomes.indexOf(nomeAmigo.innerHTML);
  listaNomes.splice(posicao, 1);
  atualizarLista();
}
