let listaDeAmigos = []; // Lista para armazenar os nomes dos amigos

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let nomeInput = document.getElementById('amigo').value.trim();
    
    if (nomeInput !== '' && !listaDeAmigos.includes(nomeInput)) {
        listaDeAmigos.push(nomeInput);
        atualizarListaAmigos();
        document.getElementById('amigo').value = ''; // Limpa o campo de input
        document.getElementById('resultado').innerHTML = ''; // Limpa o resultado anterior
    } else {
        alert('Nome inválido ou já adicionado.');
    }
}

// Função para atualizar a lista visível na tela
function atualizarListaAmigos() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = ''; // Limpa a lista atual

    listaDeAmigos.forEach(nome => {
        let item = document.createElement('li');
        item.textContent = nome;
        listaHTML.appendChild(item);
    });
}

// Função para sortear um amigo
function sortearAmigo() {
    if (listaDeAmigos.length < 2) {
        alert('Adicione pelo menos dois amigos para realizar um novo sorteio!');
        return;
    }

    // Sorteia um amigo aleatório
    let amigoSorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
    
    // Exibe o resultado
    exibirResultado(amigoSorteado);

    // Apaga o nome dos amigos da lista
    listaDeAmigos = []; // Limpa a lista de amigos
    atualizarListaAmigos(); // Atualiza a lista visível (ficando vazia)
}

// Função para exibir o resultado do sorteio
function exibirResultado(amigoSorteado) {
    let resultadoHTML = document.getElementById('resultado');
    resultadoHTML.innerHTML = ''; // Limpa o resultado anterior
    
    let item = document.createElement('li');
    item.textContent = `O amigo secreto sorteado é: ${amigoSorteado}.`;
    resultadoHTML.appendChild(item);
}






