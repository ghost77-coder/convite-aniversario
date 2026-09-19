// script.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Credenciais reais do teu projeto Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBUuuSGXy6JZGTGbQ4q8sz5qvnN003lo0po",
    authDomain: "aniversario-ce9e4.firebaseapp.com",
    projectId: "aniversario-ce9e4",
    storageBucket: "aniversario-ce9e4.appspot.com",
    messagingSenderId: "600976314403",
    appId: "1:600976314403:web:214e652f2bcb577ef22196",
    measurementId: "G-SGL63WMW19"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.addEventListener("DOMContentLoaded", () => {
    const btnProximo = document.getElementById("btn-proximo");
    const telaInicio = document.getElementById("tela-inicio");
    const telaPerguntas = document.getElementById("tela-perguntas");
    const formMensagem = document.getElementById("form-mensagem");
    const telaConvite = document.getElementById("tela-convite");
    
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

    // 2. Enviar as perguntas para o Firebase e ir para o convite
    if (formMensagem) {
        formMensagem.addEventListener("submit", async (e) => {
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

            try {
                await addDoc(collection(db, "respostas_aniversario"), dadosRespostas);
                console.log("Respostas salvas com sucesso no Firebase!");
            } catch (erro) {
                console.error("Erro ao salvar no Firebase:", erro);
            }

            telaPerguntas.classList.remove("active");
            telaConvite.classList.add("active");
        });
    }

    // 3. Abrir a telinha de download
    if (btnAbrirModal) {
        btnAbrirModal.addEventListener("click", () => {
            modalDownload.classList.add("active");
        });
    }

    // 4. Fechar a telinha de download
    if (btnFecharModal) {
        btnFecharModal.addEventListener("click", () => {
            modalDownload.classList.remove("active");
        });
    }

    if (modalDownload) {
        modalDownload.addEventListener("click", (e) => {
            if (e.target === modalDownload) {
                modalDownload.classList.remove("active");
            }
        });
    }
});