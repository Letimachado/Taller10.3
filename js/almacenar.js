const item = document.getElementById('item')
const agregar = document.getElementById('agregar')

agregar.addEventListener("click", () =>{
    localStorage.setItem("texto", item.value)
})

