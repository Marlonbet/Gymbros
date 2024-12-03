// Botón de edición
document.getElementById('edit-exercise-btn').addEventListener('click', function () {
    const newRoutine = prompt(
        'Edita tu rutina semanal (separa los días con comas, ejemplo: Lunes: Cardio, Martes: Piernas, etc.):'
    );

    if (newRoutine) {
        const routineList = document.getElementById('routine-list');
        routineList.innerHTML = ''; // Limpiar la lista actual

        const exercises = newRoutine.split(','); // Dividir los días por comas
        exercises.forEach(exercise => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${exercise.split(':')[0].trim()}:</strong> ${exercise.split(':')[1].trim()}`;
            routineList.appendChild(li);
        });
    }
});
