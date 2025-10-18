function agregarTarea(e) {
    e.preventDefault();

    if (inputTarea.value.trim()) {

        //----- usando CRETEELEMENT---------------
        // Crear li con create element
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';

        // Crear el <p> con el texto de la tarea
        const p = document.createElement('p');
        p.textContent = inputTarea.value.trim();

        // Crear botón con basurero
        const btnEliminar = document.createElement('button');
        btnEliminar.type = 'button';
        btnEliminar.className = 'btn text-danger fs-4';

        // Crear el icono de basurero <i class="bi bi-trash3-fill">
        const icono = document.createElement('i');
        icono.classList.add('bi', 'bi-trash3-fill');
        // Agregar el ícono al botón
        btnEliminar.appendChild(icono);

        // Armar la estructura: <li> ← <p> + <button>
        li.appendChild(p);
        li.appendChild(btnEliminar);

        // Agregar la tarea a la lista
        lista.appendChild(li);

        //--- fin CREATE ELEMENTE--------------
        // escuchar evento del botón para borrar tarea
        btnEliminar.addEventListener('click', () => {
            li.remove(); // borra tarea
            guardarTareas() // actualizar localStorage
        });

        guardarTareas()
        formulario.reset();
    } else {
        alert(`No se puede ingresar una tarea vacía`)
    }
}

//guarda en localStorage
function guardarTareas() {
    const elementos = lista.querySelectorAll('li')
    console.log(elementos)
    const arrayTareas = []
    elementos.forEach(li => {
        const textoTarea = li.firstChild.textContent.trim()
        arrayTareas.push(textoTarea)
    });

    // guardar arrayTareas en local storage en formato JSON.stringify
    localStorage.setItem('tareas', JSON.stringify(arrayTareas))
}

function cargarTareas() {
    // leer datos del localStorage con JSON.parse
    const arrayTareas = JSON.parse(localStorage.getItem('tareas')) || []

    arrayTareas.forEach(tarealocalStorage => {
        //----- usando CRETEELEMENT---------------
        // Crear li con create element
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';

        // Crear el <p> con el texto de la tarea
        const p = document.createElement('p');
        p.textContent = tarealocalStorage.trim();

        // Crear botón con basurero
        const btnEliminar = document.createElement('button');
        btnEliminar.type = 'button';
        btnEliminar.className = 'btn text-danger fs-4';

        // Crear el icono de basurero <i class="bi bi-trash3-fill">
        const icono = document.createElement('i');
        icono.classList.add('bi', 'bi-trash3-fill');
        // Agregar el ícono del basurero al botón eliminar
        btnEliminar.appendChild(icono);

        // Armar la estructura: <li> ← <p> + <button>
        li.appendChild(p);
        li.appendChild(btnEliminar);

        // Agregar la tarea a la lista
        lista.appendChild(li);
        //--- fin CREATE ELEMENTE--------------

        // escuchar evento del botón para borrar tarea
        btnEliminar.addEventListener('click', () => {
            console.log('borro tarea')
            li.remove(); // borra tarea
            guardarTareas() // actualizar localStorage
        });
    })
}

// ============= DOM Y LÓGICA =============

// defino variables
const formulario = document.querySelector('form')
const lista = document.getElementById('listaTareas')
const inputTarea = document.querySelector('input')


// cuando cargue el sitio web
document.addEventListener('DOMContentLoaded', cargarTareas)

// ejecutar eventos
formulario.addEventListener('submit', agregarTarea)

// otra opcion para eliminar tarea usando e.target, cuando encuentra boton 'borrar'
// lista.addEventListener('click',()=>{
//     console.log(e.target)
//     if (e.target.classlist.contains('borrar')){
//         e.target.parentElement.remove()
//     }
// })

