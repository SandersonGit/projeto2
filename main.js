const form = document.getElementById("form-atividade");
let linhas = "";
const imgAprovado = '<img src="./images/aprovado.png" alt="" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="" />';
const atividades = [];
const notas = [];
const spanAprovado = `<span class="aprovado">Aprovado</span>`;
const spanReprovado = `<span class="reprovado">Reprovado</span>`;
const notaminima = parseFloat(prompt("Digite uma nota de corte:"));

form.addEventListener("submit", function (e) {
  e.preventDefault();

  adicionaLinha();
  atualizaTabela();
  atualizaMediaFinal();
});

function adicionaLinha() {
  const inputNomeAtividade = document.getElementById("nome-atividade");
  const inputNotaAtividade = document.getElementById("nota-atividade");

  if (atividades.includes(inputNomeAtividade.value)) {
    alert(`A atividade: ${inputNomeAtividade.value} já foi inserida`)
  } else {
    
    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));
  
    let linha = `<tr>`;
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${
      inputNotaAtividade.value >= notaminima ? imgAprovado : imgReprovado
    }</td>`;
    linha += `</tr>`;
  
    linhas += linha;

  }

  inputNomeAtividade.value = "";
  inputNotaAtividade.value = "";

}

function atualizaTabela() {
  const corpoTabela = document.querySelector("tbody");

  corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
  const mediaFinal = calculaMediaFinal();
  document.getElementById("media-final-valor").innerHTML = mediaFinal;
  document.getElementById("media-final-resultado").innerHTML =
    mediaFinal >= notaminima ? spanAprovado : spanReprovado;
  //   console.log(`Média final: ${media}`);
}

function calculaMediaFinal() {
  let somaDasNotas = 0;

  for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
  }

  return somaDasNotas / notas.length;
}
