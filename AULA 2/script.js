

function adicionarTarefa() {
   let mensagem = "Tarefa adicionada com sucesso!";

   let inputTarefa = document.getElementById("inputTarefa");
   let tarefaValor = inputTarefa.value
   document.getElementById("mensagem").textContent = mensagem;

   let listaTarefas = document.getElementById("listaTarefas");
   let novaTarefa = document.createElement("li"); // Cria um novo elemento de lista
   novaTarefa.textContent = tarefaValor  ; // Define o texto da nova tarefa
   listaTarefas.appendChild(novaTarefa); // Adiciona a nova tarefa à lista

   inputTarefa.value = ""  // Limpa o campo de entrada após adicionar a tarefa

}