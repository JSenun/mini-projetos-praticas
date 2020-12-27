var botao = document.querySelector("#btn-adicionar");

botao.addEventListener("click", function () {
    event.preventDefault();
    var form = document.querySelector("#form-tarefa");
    var tarefa = document.querySelector("#tarefa").value;
    montaP(tarefa);

    form.reset();
})
//Criando a tag p que recebe a tarefa
function montaP(dado) {
    var listaTarefas = document.querySelector("#lista-tarefas");
    var p = document.createElement("p");
    p.textContent = dado;
    p.classList.add("tarefa")
    listaTarefas.appendChild(p);
}