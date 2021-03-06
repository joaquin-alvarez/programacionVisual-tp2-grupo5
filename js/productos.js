let descripcionCorta = texto => {
    texto = texto.slice(0, 50);
    texto = `${texto}...`;

    return texto;
}

let titulo = nombre => {
    let h2 = document.createElement('h2');
    h2.innerHTML = `
        <span><i class="far fa-gem"></i></span><strong> Productos</strong> ${nombre}
    `;

    return h2;
}

let listaProductos = (tipo) => {
    let arrProductos = [];

    tipo.forEach(function (producto) {
        arrProductos.push(`
            <div class='col-md-4 col-sm-12 d-flex flex-column'>
                <img src="${producto.imagen}" alt="" class="w-100 rounded img-fluid marcoImagen" >
                <h4><span><i class="fas fa-spa"></i></span> ${producto.nombre}</h4>
                
                <div>
                    <p id="textoDescripcion${producto.id}" class='text-dark textoDescripcion d-inline'>${descripcionCorta(producto.descripcion)}</p>
                    <button id="botonDescripcion${producto.id}" class='botonDescripcion botonDescripcionAbrir' type="button" data-bs-toggle="collapse" data-bs-target="#collapse${producto.id}" aria-expanded="false" aria-controls="collapse${producto.id}">
                        <span><i class="fas fa-caret-down pe-none"></i></span>
                    </button>
                </div>

                <div class="collapse" id="collapse${producto.id}">
                    <p>
                        <span class='text-dark'>${producto.descripcion}</span>
                        <div class= "flex">
                        <p class='text-dark-underlined'>Stock Disponible:</p><span class='text-dark'>${producto.cantidadDisponible} unidades</span>
                        </div>
                        <div class= "flex">
                        <p class='text-dark-underlined'>Fecha Publicacion:</p><span class='text-dark'>${producto.fechaPublicacion}</span>
                        </div>
                        <p><span>$${producto.precio}</span></p>
                        <button id="botonDescripcionCerrar${producto.id}" class='botonDescripcion botonDescripcionCerrar' type="button" data-bs-toggle="collapse" data-bs-target="#collapse${producto.id}" aria-expanded="false" aria-controls="collapse${producto.id}">
                            <span><i class="fas fa-caret-up pe-none"></i></span>
                        </button>
                    </p>
                </div>
                
                <button class="btn btn-primary botonCompra" data-bs-toggle="modal" data-bs-target="#${producto.id}"><i class="fas fa-cart-plus pe-none"></i> Comprar</button>
                
                <div class="modal fade" id="${producto.id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel${producto.id}" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel${producto.id}">${producto.nombre}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <img src="${producto.imagen}" alt="" class="w-50 d-block rounded img-fluid marcoImagen" >
                                <p>${producto.descripcion}</p>
                                <div class= "flex">
                                <p class='text-dark-underlined'>Stock Disponible:</p><span class='text-dark'>${producto.cantidadDisponible} unidades</span>
                                </div>
                                <div class= "flex">
                                <p class='text-dark-underlined'>Fecha Publicacion:</p><span class='text-dark'>${producto.fechaPublicacion}</span>
                                </div>
                                <p><span>$${producto.precio}</span></p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal"><i class="fas fa-cart-plus pe-none"></i> Comprar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`);
    });

    let str = '';

    for (const producto of arrProductos) {
        str += producto;
    }

    let row = `
        <div class="row">
            ${str}
        </div>
    `;

    return row;
}

let toggleBotonDescripcion = () => {
    $('.botonDescripcionAbrir').on('click', function () {
        let boton = $(this).attr('id');
        let nombreId = boton.indexOf(boton.match(/\d+/)[0]);
        nombreId -= 3;
        let id = boton.slice(nombreId);

        $(`#${boton}`).slideUp();
        $(`#textoDescripcion${id}`).removeClass('d-inline');
        $(`#textoDescripcion${id}`).slideUp();
    });

    $('.botonDescripcionCerrar').on('click', function () {
        let boton = $(this).attr('id');
        let nombreId = boton.indexOf(boton.match(/\d+/)[0]);
        nombreId -= 3;
        let id = boton.slice(nombreId);

        $(`#botonDescripcion${id}`).slideDown();
        $(`#textoDescripcion${id}`).addClass('d-inline');
        $(`#textoDescripcion${id}`).slideDown();
    });
}


function vistaProductos(){
    $.getJSON('https://my-json-server.typicode.com/joaquin-alvarez/fakeapi-grupo5/db', function(data){
        $('#productosFemeninos').append(listaProductos(data.productos.femeninos));
        $(titulo('Femeninos')).prependTo('#productosFemeninos .row');

        $('#productosMasculinos').append(listaProductos(data.productos.masculinos));
        $(titulo('Masculinos')).prependTo('#productosMasculinos .row');

        $('#farmacia').append(listaProductos(data.productos.farmacia));
        $(titulo('Farmacia')).prependTo('#farmacia .row');
    
        toggleBotonDescripcion();
    })
    .fail((jqxhr, textStatus, error ) => {
        let err = `${textStatus}, ${error}`
        console.log(err);
    });    
}