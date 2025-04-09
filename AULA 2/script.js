
function adicionarTarefa() {
   let mensagemElemento = document.getElementById("mensagem"); // Obtém o elemento DOM para a mensagem
   let inputTarefa = document.getElementById("inputTarefa");
   let tarefaValor = inputTarefa.value.trim(); // Remove espaços em branco do início e do fim da string

   if (tarefaValor === "") {
      alert("Por favor, insira uma tarefa.");
      return; // Retorna se o campo de entrada estiver vazio
   }

   // Define a mensagem de sucesso e altera a cor
   mensagemElemento.textContent = "Tarefa adicionada com sucesso!";
   mensagemElemento.style.color = "green";

   // Adiciona a nova tarefa à lista
   let listaTarefas = document.getElementById("listaTarefas"); // Obtém a lista de tarefas
   let novaTarefa = document.createElement("li"); // Cria um novo elemento de lista
   novaTarefa.textContent = tarefaValor; // Define o texto da nova tarefa
   listaTarefas.appendChild(novaTarefa); // Adiciona a nova tarefa à lista

   inputTarefa.value = ""; // Limpa o campo de entrada após adicionar a tarefa
}