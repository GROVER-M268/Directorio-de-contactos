const nombreInput = document.getElementById("nombre");
const telefonoInput = document.getElementById("telefono");
const btnAgregar = document.getElementById("btnAgregar");
const listaContactos = document.getElementById("listaContactos");

let contactos = [];

btnAgregar.addEventListener("click", function () {

    const nombre = nombreInput.value.trim();
    const telefono = telefonoInput.value.trim();

    if (nombre === "" || telefono === "") {
        return;
    }

    const contacto = {
        id: Date.now(),
        nombre: nombre,
        telefono: telefono
    };

    contactos.push(contacto);

    mostrarContactos();

    nombreInput.value = "";
    telefonoInput.value = "";
});

function mostrarContactos() {

    listaContactos.innerHTML = "";

    contactos.forEach(function (contacto) {

        const elemento = document.createElement("div");

        elemento.classList.add("contacto");

        elemento.innerHTML = `
            <div class="info-contacto">
                <span class="nombre-contacto">
                    ${contacto.nombre}
                </span>

                <span class="telefono-contacto">
                    ${contacto.telefono}
                </span>
            </div>

            <button class="btn-eliminar" data-id="${contacto.id}">
                Eliminar
            </button>
        `;

        listaContactos.appendChild(elemento);

        const btnEliminar =
            elemento.querySelector(".btn-eliminar");

        btnEliminar.addEventListener("click", function () {

            contactos = contactos.filter(function (item) {
                return item.id !== contacto.id;
            });

            mostrarContactos();
        });
    });
}