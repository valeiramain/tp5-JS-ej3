function agregarTarea(e) {
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
            li.remove(); // borra tarea
        });

        // agregar botón al li
        li.appendChild(btnEliminar);
        // agregar li a la lista
        lista.appendChild(li);


        guardarTareas()
        formulario.reset();
    } else {
        alert(`No se puede ingresar una tarea vacía`)
    }
}

//guarda en localStorage
function guardarTareas(){
    const elementos = lista.querySelectorAll('li')
    const arrayTareas = []
    elementos.forEach(li => {
        const textoTarea = li.firstChild.textContent.trim()
        arrayTareas.push(textoTarea)
    });

    // guardar arrayTareas en local storage en formato JSON.stringify
    localStorage.setItem('tareas',JSON.stringify(arrayTareas))


}

// ============= DOM Y LÓGICA =============

// defino variables
const formulario = document.querySelector('form')
const lista = document.getElementById('listaTareas')

//array para guardar tareas en local storage

// ejecutar eventos
formulario.addEventListener('submit', agregarTarea)

// otra opcion para eliminar tarea usando target, cuando encuentra boton 'borrar'
// lista.addEventListener('click',()=>{
//     console.log(e.target)
//     if (e.target.classlist.contains('borrar')){
//         e.target.parentElement.remove()
//     }
// })
