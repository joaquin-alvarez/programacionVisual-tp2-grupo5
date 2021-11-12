//Hardcodeo de API
let productos = {
    'femeninos': [
        {
            'id': 'fem01',
            'nombre': 'Jabon de Cacao Exfoliante',
            'descripcion': 'Jabón elaborado artesanalmente mediante el método de saponificación en frío, bajo control de temperatura y tiempo de estacionamiento. Este proceso permite conservar la glicerina natural que se produce durante la saponificación (reacción química) y preserva las maravillosas propiedades antioxidantes del oliva y coco.',
            'precio': '610.00',
            'fechaPublicacion': '04/11/2021',
            'cantidadDisponible': '10',
            'imagen': 'images/productosMujer/productoMujer1.webp'
        },
        {
            'id': 'fem02',
            'nombre': 'Crema de Almendras y Coco',
            'descripcion': 'Crema corporal para piel sensible con aceite de oliva extra virgen, manteca de karite y leche de avena. Recomendada para pieles atópicas: sequedad, escamación, irritación, picor o que requieran cuidado extra.',
            'precio': '1500.00',
            'fechaPublicacion': '04/11/2021',
            'cantidadDisponible': '20',
            'imagen': 'images/productosMujer/productoMujer2.webp'
        },
        {
            'id': 'fem03',
            'nombre': 'Tonico Segin',
            'descripcion': 'Segin es un blend de aguas hidratantes vivas y calmantes activos con capacidad de equilibrio. Se recomienda su uso para piel seca y sensible.',
            'precio': '1745.00',
            'fechaPublicacion': '04/11/2021',
            'cantidadDisponible': '7',
            'imagen': 'images/productosMujer/productoMujer3.webp'
        }
    ],
    'masculinos': [
        {
            'id': 'mas01',
            'nombre': 'Crema de Enebro',
            'descripcion': 'Flexibilidad y movimiento diario. El calor y los masajes son la recomendación más antigua para aflojar las tensiones musculares y las molestias que éstas producen a raíz de contracturas, problemas de postura o de la actividad misma. Un masaje con Crema de Enebro relaja los músculos y, por su acción calorífica, ayuda a preparar el cuerpo antes de los deportes y la actividad física.',
            'precio': '1950.00',
            'fechaPublicacion': '04/11/2021',
            'cantidadDisponible': '25',
            'imagen': 'images/productosHombre/productoHombre1.webp'
        },
        {
            'id': 'mas02',
            'nombre': 'Tónico Caspa',
            'descripcion': 'Protección y control ante la descamación de la piel. El tónico caspa -de la línea Tratamiento Magistral Caspa para hombres- protege tu cabello y cuero cabelludo, aliviando la picazón, descamación y resequedad.',
            'precio': '2420.00',
            'fechaPublicacion': '04/11/2021',
            'cantidadDisponible': '17',
            'imagen': 'images/productosHombre/productoHombre2.webp'
        },
        {
            'id': 'mas03',
            'nombre': 'Shave Oil PURE',
            'descripcion': 'Protección de la piel durante el afeitado.El shave oil -de la línea saludable PURE para hombres- brinda protección e hidratación a la piel durante el proceso de afeitado, evitando irritaciones. ',
            'precio': '2260.00',
            'fechaPublicacion': '04/11/2021',
            'cantidadDisponible': '21',
            'imagen': 'images/productosHombre/productoHombre3.webp'
        }
    ],
    'farmacia': [
        {
            'id': 'far01',
            'nombre': 'Aucic Pure',
            'descripcion': 'Solución oftálmica esteril transparente, lubricante y humectante que actua sustituyendo temporalmente la insuficiencia de lagrimas protegiendo la conjuntiva y el epitelio de la cornea de la irritacion mecánica y la fricción de los parpados.',
            'precio': '420.00',
            'fechaPublicacion': '04/11/2021',
            'cantidadDisponible': '40',
            'imagen': 'images/productosFarmacia/farmacia1.webp'
        },
        {
            'id': 'far02',
            'nombre': 'Quelat Complex',
            'descripcion': 'Contiene Magnesio Quelato 200 mg + Zinc Quelato 7 mg + Selenio Quelato 50 mcg. Estos minerales desempeñan un papel muy importante en el organismo, ya que son necesarios para la elaboración de tejidos, para la síntesis de hormonas y en la mayor parte de las reacciones químicas en las que intervienen enzimas.',
            'precio': '2135.00',
            'fechaPublicacion': '04/11/2021',
            'cantidadDisponible': '20',
            'imagen': 'images/productosFarmacia/farmacia2.webp'
        },
        {
            'id': 'far03',
            'nombre': 'Xtracal Advanced',
            'descripcion': 'Suplemento a base de aceite de pescado, vitaminas y minerales en capsulas. Contiene complejo vitaminico B que ayuda al óptimo funcionamiento del sistema nervoso; ayuda a mejorar el sistema immunitario y ayuda a disminuir el cansancio, el estrés y la fatiga del día a día.',
            'precio': '950.00',
            'fechaPublicacion': '04/11/2021',
            'cantidadDisponible': '5',
            'imagen': 'images/productosFarmacia/farmacia3.webp'
        }
    ]

};

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

    return str;
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
    $(titulo('Femeninos')).prependTo('#productosFemeninos .row');
    $('#productosFemeninos .row').append(listaProductos(productos.femeninos));

    $(titulo('Masculinos')).prependTo('#productosMasculinos .row');
    $('#productosMasculinos .row').append(listaProductos(productos.masculinos));

    $(titulo('Farmacia')).prependTo('#farmacia .row');
    $('#farmacia .row').append(listaProductos(productos.farmacia));
    
    toggleBotonDescripcion();
}