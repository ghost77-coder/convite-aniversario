// script.js

document.addEventListener("DOMContentLoaded", () => {
    const btnProximo = document.getElementById("btn-proximo");
    const telaInicio = document.getElementById("tela-inicio");
    const telaPerguntas = document.getElementById("tela-perguntas");
    const formMensagem = document.getElementById("form-mensagem");
    const telaConvite = document.getElementById("tela-convite");
    
    // Elementos da telinha de download
    const btnAbrirModal = document.getElementById("btn-abrir-modal");
    const btnFecharModal = document.getElementById("btn-fechar-modal");
    const modalDownload = document.getElementById("modal-download");

    // 1. Ir do início para as perguntas
    if (btnProximo) {
        btnProximo.addEventListener("click", () => {
            telaInicio.classList.remove("active");
            telaPerguntas.classList.add("active");
        });
    }

    // 2. Enviar as perguntas e ir para a tela do convite limpa
    if (formMensagem) {
        formMensagem.addEventListener("submit", (e) => {
            e.preventDefault();

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

            telaPerguntas.classList.remove("active");
            telaConvite.classList.add("active");
        });
    }

    // 3. Abrir a telinha ao clicar no botão do canto
    if (btnAbrirModal) {
        btnAbrirModal.addEventListener("click", () => {
            modalDownload.classList.add("active");
        });
    }

    // 4. Fechar a telinha ao clicar no "X"
    if (btnFecharModal) {
        btnFecharModal.addEventListener("click", () => {
            modalDownload.classList.remove("active");
        });
    }

    // Fechar também se clicar fora do card preto
    if (modalDownload) {
        modalDownload.addEventListener("click", (e) => {
            if (e.target === modalDownload) {
                modalDownload.classList.remove("active");
            }
        });
    }
});