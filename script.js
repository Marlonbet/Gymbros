// Datos iniciales de la rutina
const defaultRoutine = [
    { day: "Lunes", exercise: "Pecho y tríceps" },
    { day: "Martes", exercise: "Espalda y bíceps" },
    { day: "Miércoles", exercise: "Tren Inferior" },
    { day: "Jueves", exercise: "Hombros y trapecio (abdomen opcional)" },
    { day: "Viernes", exercise: "Pecho y espalda (día mixto)" }
];

// Referencia al elemento donde se mostrará la rutina
const routineList = document.getElementById("routine-list");

// Renderizar la rutina en la lista
function renderRoutine() {
    routineList.innerHTML = ""; // Limpiar lista
    defaultRoutine.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `<h3>${item.day}:</h3><p>${item.exercise}</p>`;
        routineList.appendChild(li);
    });
}

// Llamar a la función para mostrar los datos al cargar la página
renderRoutine();

// Botón de edición
document.getElementById('edit-exercise-btn').addEventListener('click', function () {
    const newRoutine = prompt(
        'Edita tu rutina semanal (separa los días con comas, ejemplo: Lunes: Cardio, Martes: Piernas, etc.):'
    );

    if (newRoutine) {
        // Limpiar la lista actual
        const exercises = newRoutine.split(','); // Dividir los días por comas
        exercises.forEach((exercise, index) => {
            const [day, routine] = exercise.split(':').map(item => item.trim());
            
            // Actualizamos la rutina
            if (defaultRoutine[index]) {
                defaultRoutine[index].day = day;
                defaultRoutine[index].exercise = routine;
            }
        });
        renderRoutine(); // Volver a renderizar la rutina con los nuevos valores
    }
});
