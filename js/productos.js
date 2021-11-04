//Hardcodeo de API
let productos = [{
    femeninos: [
        {
            'nombre': 'Nombre 01',
            'descripcion': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore cupiditate exercitationem voluptates dignissimos, dicta ducimus odit veritatis. Esse animi iure, laborum vero eum! A magni eius, aperiam mollitia quos molestias?',
            'precio': '1.2',
            'fechaPublicacion': '04/11/2021',
            'cantidadDisponible': '5',
            'imagen': 'images/image-01.jpg'
        },
        {
            'nombre': 'Nombre 02',
            'descripcion': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore cupiditate exercitationem voluptates dignissimos, dicta ducimus odit veritatis. Esse animi iure, laborum vero eum! A magni eius, aperiam mollitia quos molestias?',
            'precio': '1.2',
            'fechaPublicacion': '04/11/2021',
            'cantidadDisponible': '5',
            'imagen': 'images/image-02.jpg'
        },
        {
            'nombre': 'Nombre 03',
            'descripcion': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore cupiditate exercitationem voluptates dignissimos, dicta ducimus odit veritatis. Esse animi iure, laborum vero eum! A magni eius, aperiam mollitia quos molestias?',
            'precio': '1.2',
            'fechaPublicacion': '04/11/2021',
            'cantidadDisponible': '5',
            'imagen': 'images/image-03.jpg'
        }
    ],
    masculinos: [
        {
            'nombre': 'Nombre 01',
            'descripcion': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore cupiditate exercitationem voluptates dignissimos, dicta ducimus odit veritatis. Esse animi iure, laborum vero eum! A magni eius, aperiam mollitia quos molestias?',
            'precio': '1.2',
            'fechaPublicacion': '04/11/2021',
            'cantidadDisponible': '5',
            'imagen': 'images/image-01.jpg'
        },
        {
            'nombre': 'Nombre 02',
            'descripcion': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore cupiditate exercitationem voluptates dignissimos, dicta ducimus odit veritatis. Esse animi iure, laborum vero eum! A magni eius, aperiam mollitia quos molestias?',
            'precio': '1.2',
            'fechaPublicacion': '04/11/2021',
            'cantidadDisponible': '5',
            'imagen': 'images/image-02.jpg'
        },
        {
            'nombre': 'Nombre 03',
            'descripcion': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore cupiditate exercitationem voluptates dignissimos, dicta ducimus odit veritatis. Esse animi iure, laborum vero eum! A magni eius, aperiam mollitia quos molestias?',
            'precio': '1.2',
            'fechaPublicacion': '04/11/2021',
            'cantidadDisponible': '5',
            'imagen': 'images/image-03.jpg'
        }
    ],
    farmacia: [
        {
            'nombre': 'Nombre 01',
            'descripcion': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore cupiditate exercitationem voluptates dignissimos, dicta ducimus odit veritatis. Esse animi iure, laborum vero eum! A magni eius, aperiam mollitia quos molestias?',
            'precio': '1.2',
            'fechaPublicacion': '04/11/2021',
            'cantidadDisponible': '5',
            'imagen': 'images/image-01.jpg'
        },
        {
            'nombre': 'Nombre 02',
            'descripcion': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore cupiditate exercitationem voluptates dignissimos, dicta ducimus odit veritatis. Esse animi iure, laborum vero eum! A magni eius, aperiam mollitia quos molestias?',
            'precio': '1.2',
            'fechaPublicacion': '04/11/2021',
            'cantidadDisponible': '5',
            'imagen': 'images/image-02.jpg'
        },
        {
            'nombre': 'Nombre 03',
            'descripcion': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore cupiditate exercitationem voluptates dignissimos, dicta ducimus odit veritatis. Esse animi iure, laborum vero eum! A magni eius, aperiam mollitia quos molestias?',
            'precio': '1.2',
            'fechaPublicacion': '04/11/2021',
            'cantidadDisponible': '5',
            'imagen': 'images/image-03.jpg'
        }
    ]

}];

function productosFemeninos() {
    productos[0].femeninos.forEach(function (producto, index) {
        let div = document.createElement('div');
        div.className = 'col-md-4 col-sm-12 d-flex flex-column justify-content-between';
        div.innerHTML = `
            <img src="${producto.imagen}" alt="" class="w-100 rounded img-fluid marcoImagen" >
            <h4><span><i class="fas fa-spa"></i></span> ${producto.nombre}</h4>
            <div>
                <p class='text-dark textoDescripcion d-inline'>${descripcionCorta(producto.descripcion)}</p>
                <button class='botonDescripcion botonDescripcionAbierto' type="button" data-bs-toggle="collapse" data-bs-target="#collapseFemenino${index}" aria-expanded="false" aria-controls="collapseFemenino${index}">
                    <span><i class="fas fa-caret-down pe-none"></i></span>
                </button>
            </div>

            <div class="collapse" id="collapseFemenino${index}">
                <p>
                    <span class='text-dark'>${producto.descripcion}</span>
                    <button class='botonDescripcion botonDescripcionCerrar' type="button" data-bs-toggle="collapse" data-bs-target="#collapseFemenino${index}" aria-expanded="false" aria-controls="collapseFemenino${index}">
                        <span><i class="fas fa-caret-up pe-none"></i></span>
                    </button>
                </p>
            </div>
            
            <button class="btn btn-primary botonCompra" data-bs-toggle="modal" data-bs-target="#femenino${index}"><i class="fas fa-cart-plus pe-none"></i> Comprar</button>
            
            <div class="modal fade" id="femenino${index}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabelFemenino" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabelFemenino">${producto.nombre}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <img src="${producto.imagen}" alt="" class="w-100 rounded img-fluid marcoImagen" >
                            <p>${producto.descripcion}</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal"><i class="fas fa-cart-plus pe-none"></i> Comprar</button>
                        </div>
                    </div>
                </div>
            </div>`;
        $('#productosFemeninos .row').append(div);
    });
}

function productosMasculinos() {
    productos[0].masculinos.forEach(function (producto, index) {
        let div = document.createElement('div');
        div.className = 'col-md-4 col-sm-12 d-flex flex-column justify-content-between';
        div.innerHTML = `
            <img src="${producto.imagen}" alt="" class="w-100 rounded img-fluid marcoImagen" >
            <h4><span><i class="fas fa-spa"></i></span> ${producto.nombre}</h4>
            <div>
                <p class='text-dark textoDescripcion d-inline'>${descripcionCorta(producto.descripcion)}</p>
                <button class='botonDescripcion botonDescripcionAbierto' type="button" data-bs-toggle="collapse" data-bs-target="#collapseMasculino${index}" aria-expanded="false" aria-controls="collapseMasculino${index}">
                    <span><i class="fas fa-caret-down pe-none"></i></span>
                </button>
            </div>

            <div class="collapse" id="collapseMasculino${index}">
                <p>
                    <span class='text-dark'>${producto.descripcion}</span>
                    <button class='botonDescripcion botonDescripcionCerrar' type="button" data-bs-toggle="collapse" data-bs-target="#collapseMasculino${index}" aria-expanded="false" aria-controls="collapseMasculino${index}">
                        <span><i class="fas fa-caret-up pe-none"></i></span>
                    </button>
                </p>
            </div>
            
            <button class="btn btn-primary botonCompra" data-bs-toggle="modal" data-bs-target="#masculino${index}"><i class="fas fa-cart-plus pe-none"></i> Comprar</button>
            
            <div class="modal fade" id="masculino${index}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabelMasculino" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabelMasculino">${producto.nombre}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <img src="${producto.imagen}" alt="" class="w-100 rounded img-fluid marcoImagen" >
                            <p>${producto.descripcion}</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal"><i class="fas fa-cart-plus pe-none"></i> Comprar</button>
                        </div>
                    </div>
                </div>
            </div>`;
        $('#productosMasculinos .row').append(div);
    });
}

function productosFarmacia() {
    productos[0].farmacia.forEach(function (producto, index) {
        let div = document.createElement('div');
        div.className = 'col-md-4 col-sm-12 d-flex flex-column justify-content-between';
        div.innerHTML = `
            <img src="${producto.imagen}" alt="" class="w-100 rounded img-fluid marcoImagen" >
            <h4><span><i class="fas fa-spa"></i></span> ${producto.nombre}</h4>
            <div>
                <p class='text-dark textoDescripcion d-inline'>${descripcionCorta(producto.descripcion)}</p>
                <button class='botonDescripcion botonDescripcionAbierto' type="button" data-bs-toggle="collapse" data-bs-target="#collapseFarmacia${index}" aria-expanded="false" aria-controls="collapseFarmacia${index}">
                    <span><i class="fas fa-caret-down pe-none"></i></span>
                </button>
            </div>

            <div class="collapse" id="collapseFarmacia${index}">
                <p>
                    <span class='text-dark'>${producto.descripcion}</span>
                    <button class='botonDescripcion botonDescripcionCerrar' type="button" data-bs-toggle="collapse" data-bs-target="#collapseFarmacia${index}" aria-expanded="false" aria-controls="collapseFarmacia${index}">
                        <span><i class="fas fa-caret-up pe-none"></i></span>
                    </button>
                </p>
            </div>
            
            <button class="btn btn-primary botonCompra" data-bs-toggle="modal" data-bs-target="#farmacia${index}"><i class="fas fa-cart-plus pe-none"></i> Comprar</button>
            
            <div class="modal fade" id="farmacia${index}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabelFarmacia" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabelFarmacia">${producto.nombre}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <img src="${producto.imagen}" alt="" class="w-100 rounded img-fluid marcoImagen" >
                            <p>${producto.descripcion}</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal"><i class="fas fa-cart-plus pe-none"></i> Comprar</button>
                        </div>
                    </div>
                </div>
            </div>`;
        $('#farmacia .row').append(div);
    });
}

function descripcionCorta(texto) {
    texto = texto.slice(0, 50);
    texto += `${texto}...`;

    return texto;
}

function toggleBotonDescripcion() {
    $('.botonDescripcionAbierto').on('click', function () {
        $('.botonDescripcionAbierto').slideUp();
        $('.textoDescripcion').removeClass('d-inline');
        $('.textoDescripcion').slideUp();
    });

    $('.botonDescripcionCerrar').on('click', function () {
        $('.botonDescripcionAbierto').slideDown();
        $('.textoDescripcion').addClass('d-inline');
        $('.textoDescripcion').slideUp();
    });
}
