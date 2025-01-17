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
    atualizarLista();
  }
}

// Função para atualizar a lista de nomes na tela
function atualizarLista() {
  let lista = document.querySelector("#listaAmigos");
  lista.innerHTML = "";
  for (var i = 0; i < listaNomes.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = listaNomes[i];
    lista.appendChild(li);
  }
}
