let computadoras = [];
let gananciasTotales = 0;

document.getElementById('computadoraForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let nombreCliente = document.getElementById('nombreCliente').value;
    let contraseñaWindows = document.getElementById('contraseñaWindows').value;
    let tarea = document.getElementById('tarea').value;
    let presupuesto = parseFloat(document.getElementById('presupuesto').value);
    let precioComponentes = parseFloat(document.getElementById('precioComponentes').value);

    let computadora = {
        nombreCliente: nombreCliente,
        contraseñaWindows: contraseñaWindows,
        tarea: tarea,
        presupuesto: presupuesto,
        precioComponentes: precioComponentes
    };

    computadoras.push(computadora);
    gananciasTotales += presupuesto - precioComponentes;

    Swal.fire({
        icon: 'success',
        title: '¡Computadora Agregada!',
        text: 'Se ha agregado una nueva computadora con éxito.',
        timer: 2000,
        showConfirmButton: false
    });

    Toastify({
        text: `Ganancias totales: $${gananciasTotales.toFixed(2)}`,
        duration: 3000,
        close: true,
        stopOnFocus: true,
    }).showToast();

    localStorage.setItem('computadoras', JSON.stringify(computadoras));
    localStorage.setItem('gananciasTotales', gananciasTotales);

    document.getElementById('computadoraForm').reset();
});

function mostrarInformacionComputadoras() {
    let storedComputadoras = localStorage.getItem('computadoras');
    let storedGananciasTotales = localStorage.getItem('gananciasTotales');

    if (storedComputadoras && storedGananciasTotales) {
        computadoras = JSON.parse(storedComputadoras);
        gananciasTotales = parseFloat(storedGananciasTotales);

        let infoDiv = document.createElement('div');
        infoDiv.innerHTML = "<h2>Información de las computadoras:</h2>";
        
        let listaComputadoras = document.createElement('ul');
        
        computadoras.forEach(computadora => {
            let listItem = document.createElement('li');
            listItem.textContent = `Nombre del Cliente: ${computadora.nombreCliente}, Contraseña Windows: ${computadora.contraseñaWindows}, Tarea: ${computadora.tarea}, Presupuesto: $${computadora.presupuesto.toFixed(2)}, Precio de Componentes: $${computadora.precioComponentes.toFixed(2)}`;
            
            listaComputadoras.appendChild(listItem);
        });
        
        infoDiv.appendChild(listaComputadoras);

        document.querySelector('.info-container').innerHTML = '';
        document.querySelector('.info-container').appendChild(infoDiv);
    } else {
        alert('No hay datos almacenados');
    }
}

function mostrarGananciasTotales() {
    let storedGananciasTotales = localStorage.getItem('gananciasTotales');

    if (storedGananciasTotales) {
        gananciasTotales = parseFloat(storedGananciasTotales);
        document.querySelector('.info-container').innerHTML = `<p>Ganancias totales: $${gananciasTotales.toFixed(2)}</p>`;
    } else {
        alert('No hay datos almacenados');
    }
}

document.getElementById("mostrarBtn").addEventListener("click", function() {
    mostrarInformacionComputadoras();
});

document.getElementById("mostrarGananciasBtn").addEventListener("click", function() {
    mostrarGananciasTotales();
});



