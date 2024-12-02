// Simulación de datos iniciales
let workoutData = JSON.parse(localStorage.getItem("workoutData")) || {
    lunes: ["Pecho y tríceps"],
    martes: ["Espalda y bíceps"],
    miércoles: ["Tren Inferior"],
    jueves: ["Hombros y trapecio(abdomen opcional)"],
    viernes: ["Pecho y Espalda(día mixto)"],
};

// Cargar rutinas
function renderRoutine() {
    const routineList = document.getElementById("routine-list");
    routineList.innerHTML = ""; // Limpia la lista actual
    Object.keys(workoutData).forEach((day) => {
        const dayItem = document.createElement("li");
        dayItem.innerHTML = `
            <strong>${day.charAt(0).toUpperCase() + day.slice(1)}:</strong> 
            ${workoutData[day].join(", ")}
        `;
        routineList.appendChild(dayItem);
    });
}

// Comprobar mensajes actualizados y cambiar icono
function checkMessages() {
    const messagesUpdated = JSON.parse(localStorage.getItem("messagesUpdated"));
    const inboxIcon = document.getElementById("inbox-icon");
    if (messagesUpdated) {
        inboxIcon.textContent = "📬"; // Mensajes nuevos
    } else {
        inboxIcon.textContent = "📭"; // Sin mensajes nuevos
    }
}

// Inicializar
document.addEventListener("DOMContentLoaded", () => {
    renderRoutine();
    checkMessages();
});

// Simulación de añadir ejercicio (puedes expandirlo)
document.getElementById("add-exercise-btn").addEventListener("click", () => {
    const newExercise = prompt("Escribe un nuevo ejercicio:");
    if (newExercise) {
        workoutData.lunes.push(newExercise); // Añade al lunes por defecto
        localStorage.setItem("workoutData", JSON.stringify(workoutData));
        renderRoutine();
    }
});