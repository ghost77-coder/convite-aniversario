// script.js

// Quando a página carregar completamente
document.addEventListener("DOMContentLoaded", () => {
    const btnProximo = document.getElementById("btn-proximo");
    const telaInicio = document.getElementById("tela-inicio");
    const telaPerguntas = document.getElementById("tela-perguntas");
    const formMensagem = document.getElementById("form-mensagem");
    const telaSucesso = document.getElementById("tela-sucesso");

    // 1. Ao clicar no botão da primeira tela, esconde o início e mostra as perguntas
    if (btnProximo) {
        btnProximo.addEventListener("click", () => {
            telaInicio.classList.remove("active");
            telaPerguntas.classList.add("active");
        });
    }

    // 2. Ao enviar o formulário com as respostas
    if (formMensagem) {
        formMensagem.addEventListener("submit", (e) => {
            e.preventDefault();

            // Pega os valores dos 6 campos preenchidos
            const dadosRespostas = {
                nome: document.getElementById("nome-convidado").value,
                gosta: document.getElementById("pergunta-gosta").value,
                presente: document.getElementById("pergunta-presente").value,
                fora: document.getElementById("pergunta-fora").value,
                confirmou: document.getElementById("pergunta-confirmou").value,
                beber: document.getElementById("pergunta-beber").value,
                dataEnvio: new Date().toISOString()
            };

            console.log("Respostas recolhidas:", dadosRespostas);

            // Aqui podes integrar o envio para o Firebase Firestore futuramente
            // Por enquanto, muda para a tela de sucesso:
            telaPerguntas.classList.remove("active");
            telaSucesso.classList.add("active");
        });
    }
});