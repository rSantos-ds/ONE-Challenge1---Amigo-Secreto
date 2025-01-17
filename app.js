let listaNomes = [];

function adicionarAmigo() {
  nome = document.querySelector("#amigo");

  if (nome.value == "") {
    alert("Campo vazio, por favor preencha com um nome ou valor!");
  } else if (listaNomes.includes(nome.value)) {
    alert(
      "Nome ja foi inserido anteriormente, por favor insira apenas valores unicos"
    );
  } else {
    listaNomes.push(nome.value);
    nome.value = "";
  }
}
