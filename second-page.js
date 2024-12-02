// Mensaje predeterminado que solo se puede editar desde el código
let predefinedMessage = "Este es un mensaje predeterminado que solo puede ser editado desde el código.";

// Simulación de mensajes iniciales
let messages = JSON.parse(localStorage.getItem("messages")) || [
    "Mensaje 1: Recordatorio de entrenamiento.",
    "Mensaje 2: Nueva rutina disponible.",
    "Mensaje 3: Consejo de nutrición."
];

// Renderizar mensajes
function renderMessages() {
    const messageList = document.getElementById("message-list");
    messageList.innerHTML = ""; // Limpia la lista
    messages.forEach((message, index) => {
        const listItem = document.createElement("li");
        listItem.classList.add("message");
        listItem.textContent = message;
        listItem.dataset.index = index; // Índice para identificar el mensaje
        messageList.appendChild(listItem);
    });

    // Renderizar el mensaje predeterminado
    const messageBox = document.getElementById("message-box");
    messageBox.textContent = predefinedMessage;
}

// Marcar como "sin mensajes nuevos" al visitar
function resetMessageStatus() {
    localStorage.setItem("messagesUpdated", JSON.stringify(false));
}

// Función para cerrar la página
function closeInbox() {
    resetMessageStatus();
    window.history.back(); // Volver a la página anterior
}

// Inicialización
function initMessages() {
    renderMessages();
    resetMessageStatus();
}

// Actualizar un mensaje (simulación de edición por el programador)
function updateMessage(index, newContent) {
    messages[index] = newContent;
    localStorage.setItem("messages", JSON.stringify(messages));
    localStorage.setItem("messagesUpdated", JSON.stringify(true)); // Marca mensajes como nuevos
}

document.addEventListener("DOMContentLoaded", initMessages);