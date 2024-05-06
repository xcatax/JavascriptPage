const listaClientes = document.querySelector("#lista-clientes");
const clientesContainer = document.getElementById("clientesContainer");

fetch("./js/clientes.json")
    .then(response => response.json())
    .then(data => {
        mostrarClientes(data);
    });
    
function mostrarClientes(clientes) {
    clientes.forEach(cliente => {
        const li = document.createElement("li");
        li.innerText = "Nombre: " + cliente.nombreCliente + "  -  Tarea realizada: " + cliente.tarea;
        listaClientes.append(li);
    });

    document.getElementById("mostrarClientesBtn").addEventListener("click", function() {
        clientesContainer.style.display = "block";

        Toastify({
            text: "Listado de clientes",
            duration: 3000,
            close: true,
            stopOnFocus: true,
        }).showToast();
    });
}
    