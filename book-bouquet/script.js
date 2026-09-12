// 📚 Lista de livros disponíveis para o buquê
const livros = [
    { titulo: "Anne de Green Gables", autor: "L. M. Montgomery", emoji: "📕" },
    { titulo: "O Jardim Secreto", autor: "F. H. Burnett", emoji: "📗" },
    { titulo: "Pequenas Mulheres", autor: "Louisa May Alcott", emoji: "📘" },
    { titulo: "Orgulho e Preconceito", autor: "Jane Austen", emoji: "📙" },
    { titulo: "O Morro dos Ventos Uivantes", autor: "Emily Brontë", emoji: "📔" },
    { titulo: "Jane Eyre", autor: "Charlotte Brontë", emoji: "📓" },
    { titulo: "Mulherzinhas", autor: "Louisa May Alcott", emoji: "📒" },
    { titulo: "A Princesinha", autor: "F. H. Burnett", emoji: "📕" },
    { titulo: "Persuasão", autor: "Jane Austen", emoji: "📗" },
    { titulo: "Emma", autor: "Jane Austen", emoji: "📘" },
    { titulo: "A Biblioteca dos Sonhos Secretos", autor: "Michiko Aoyama", emoji: "🌸" },
    { titulo: "Vou te Receitar um Gato", autor: "Syou Ishida", emoji: "🐈" },
    { titulo: "Bem-vindos à Livraria Hyunam-Dong", autor: "Hwang Bo-Reum", emoji: "🍵" }
];
// 🎯 "Pegando" os elementos da tela pelo id
const spanQuantidade = document.getElementById("quantidade");
const btnMenos = document.getElementById("btnMenos");
const btnMais = document.getElementById("btnMais");

// 📦 Variável que guarda a quantidade escolhida (começa em 3)
let quantidade = 3;

// ➕ Botão de aumentar
btnMais.addEventListener("click", () => {
    if (quantidade < livros.length) {
        quantidade++;
        spanQuantidade.textContent = quantidade;
    }
});

// ➖ Botão de diminuir
btnMenos.addEventListener("click", () => {
    if (quantidade > 1) {
        quantidade--;
        spanQuantidade.textContent = quantidade;
    }
});
// 🎯 "Pegando" mais elementos da tela
const btnCriar = document.getElementById("btnCriar");
const btnNovo = document.getElementById("btnNovo");
const divResultado = document.getElementById("resultado");
const divBuque = document.getElementById("buque");

// 🌸 Função principal: monta o buquê usando laços de repetição
function criarBuque() {
    const buque = [];        // lista vazia que vai receber os livros
    let contador = 0;        // variável de controle do laço

    // 🔁 Laço WHILE — repete até atingir a quantidade escolhida
    while (contador < quantidade) {
        // 🎲 Sorteia um índice aleatório entre 0 e (livros.length - 1)
        const indice = Math.floor(Math.random() * livros.length);
        const livroSorteado = livros[indice];

        // 🔍 Verifica se o livro já está no buquê (não repetir!)
        let jaExiste = false;
        let i = 0;
        while (i < buque.length) {
            if (buque[i].titulo === livroSorteado.titulo) {
                jaExiste = true;
                break; // 🛑 sai do laço interno assim que encontra repetição
            }
            i++;
        }

        // ⏭️ Se já existe, pula esta iteração e sorteia outro
        if (jaExiste) {
            continue;
        }

        // ✅ Adiciona o livro ao buquê e aumenta o contador
        buque.push(livroSorteado);
        contador++;
    }

    // 🖼️ Chama a função que exibe o buquê na tela
    exibirBuque(buque);
}

// 🖼️ Função que exibe os livros na tela usando do...while
function exibirBuque(buque) {
    divBuque.innerHTML = ""; // limpa o buquê anterior

    let j = 0;
    do {
        const livro = buque[j];
        const card = document.createElement("div");
        card.classList.add("card-livro");
        card.innerHTML = `
            <div class="emoji">${livro.emoji}</div>
            <div class="titulo">${livro.titulo}</div>
            <div class="autor">${livro.autor}</div>
        `;
        divBuque.appendChild(card);
        j++;
    } while (j < buque.length);

    // 👁️ Mostra a área de resultado (que estava oculta)
    divResultado.classList.remove("oculto");
}

// 🎬 Eventos dos botões
btnCriar.addEventListener("click", criarBuque);
btnNovo.addEventListener("click", criarBuque);