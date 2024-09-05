//LLamar a los elementos del html con los cuales vamos a trabajar
const item = document.getElementById('item');
const agregar = document.getElementById('agregar');
const itemList = document.getElementById('contenedor');
const botonLimpiar = document.getElementById('limpiar');

// Inicializar los ítems desde localStorage o un array vacío
let items = JSON.parse(localStorage.getItem('items')) || [];

// Función para actualizar la vista de la lista de ítems
function updateList() {
// Limpiar la lista existente
  itemList.innerHTML = '';

  // Agregar cada ítem al DOM
  items.forEach((itemText, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = itemText;
    listItem.className = 'list-group-item';
    itemList.appendChild(listItem);
  });
}

function limpiarLista() {
    contenedor.innerHTML = '';
    localStorage.removeItem('items');
} 

// Asignar eventos a los botones
botonLimpiar.addEventListener('click', limpiarLista)

// Actualizar la vista al cargar la página
updateList();

// Evento para agregar un nuevo ítem
agregar.addEventListener("click", () => {
  const newItem = item.value.trim();

  if (newItem !== '') {
    // Agregar el nuevo ítem al array
    items.push(newItem);

    // Guardar el array actualizado en localStorage
    localStorage.setItem('items', JSON.stringify(items));

    // Actualizar la lista en el DOM
    updateList();

    // Limpiar el campo de entrada
    item.value = '';

  }
});
