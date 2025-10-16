function cargarTarea(e) {
    e.preventDefault();
    const inputTarea = document.querySelector('input')
    console.log(inputTarea.value)
    if (inputTarea.value){

        // Crear li con create element
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.textContent = inputTarea.value;

        // Crear botón con basurero
        const btnEliminar = document.createElement('button');
        btnEliminar.type = 'button';
        btnEliminar.className = 'btn text-danger fs-4';
        btnEliminar.innerHTML = '<i class="bi bi-trash3-fill"></i>';

        // escuchar evento del botón para borrar tarea
        btnEliminar.addEventListener('click', () => {
            li.remove(); // elimina la tarea
        });

        // agregar botón al li
        li.appendChild(btnEliminar);
        // agregar li a la lista
        lista.appendChild(li);

        formulario.reset();
    } else {
        alert(`No se puede ingresar una tarea vacía`)
    }
}


// ============= DOM Y LÓGICA =============

// defino variables
const formulario = document.querySelector('form')
const lista = document.getElementById('listaTareas')

// ejecutar eventos
formulario.addEventListener('submit', cargarTarea)
