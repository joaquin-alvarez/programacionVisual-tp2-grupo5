let testimoniosUsers = {
    'usuarios': [
        {
            'nombre': 'Juan',
            'apellido': 'Pérez',
            'testimonio': 'Utilizo productos cosméticos desde los 15 años y NOMBRE DEL PRODUCTO es, con diferencia, el mejor que he probado jamás. Puedes sentir los principios activos penetrando literalmente en la piel, en lugar de quedarse en la superficie. Ahora tengo la piel más luminosa e hidratada..',
            'imagen': 'images/clientes/01.jpg',
            'social': {
                'facebook': 'https://es-la.facebook.com/' ,
                'instagram': 'https://www.instagram.com/?hl=es'
            }
        },
        {
            'nombre': 'Ana',
            'apellido': 'Clara',
            'testimonio': 'Con diferencia el mejor tratamiento que he probado. Desde el momento en que me aplico NOMBRE DEL PRODUCTO, me noto la piel y me veo mucho mejor: cierra los poros, el tono es más uniforme y la hidratación es perfecta. Y lo que me encanta es que el producto viene puro, no diluido. Es un tratamiento específico para mi tipo de piel. Otros productos comparables son entre tres y cuatro veces más caros..',
            'imagen': 'images/clientes/02.jpg',
            'social': {
                'facebook': 'https://es-la.facebook.com/' ,
                'instagram': 'https://www.instagram.com/?hl=es'
            }
        }
    ]
};


let testimoniosUsuarios = () =>{
    let arrTestimonios = [];
    
    testimoniosUsers.usuarios.forEach(function(testimonio){
        arrTestimonios.push( `
            <div class="row mb-4">
                <div class="col-md-4 col-sm-12">
                    <img src="${testimonio.imagen}" alt="" class="img-fluid w-100">
                </div>
                <div class="col-md-8 col-sm-12">
                    <h3><span><i class="fas fa-spa"></i></span><strong> ${testimonio.nombre}</strong> ${testimonio.apellido}</h3>
                    <p><span><i class="fas fa-quote-left"></i></span> ${testimonio.testimonio} <span><i class="fas fa-quote-right"></i></span></p>
                    <div class="social">
                        <a class="social" href="${testimonio.social.instagram}" target="_blank">
                            <span><i class="fab fa-instagram"></i></span>
                        </a> 
                        <a class="social" href="${testimonio.social.facebook}" target="_blank"> 
                            <span><i class="fab fa-facebook"></i></span>
                        </a>
                    </div>
                </div>
            </div>
        `);
    });

    let str = '';

    for (const testimonio of arrTestimonios) {
        str += testimonio;
    }

    return str;
}


function testimonios() {
    let div = document.createElement('div');
    div.className = 'container';
    div.innerHTML = `
        <h2><span><i class="far fa-gem"></i></span><strong> Nuestros</strong> clientes</h2>

        ${testimoniosUsuarios()}
    `;

    $('.testimonios').append(div);
}