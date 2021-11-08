let testimoniosUsers = {
    'usuarios': [
        {
            'nombre': 'Juan',
            'apellido': 'Pérez',
            'testimonio': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae deleniti, recusandae porro magni, minus ipsam animi ad officiis eligendi natus aut qui, harum impedit pariatur dignissimos commodi veniam saepe adipisci.',
            'imagen': 'images/clientes/01.jpg',
            'social': {
                'facebook': 'https://es-la.facebook.com/' ,
                'instagram': 'https://www.instagram.com/?hl=es'
            }
        },
        {
            'nombre': 'Ana',
            'apellido': 'Clara',
            'testimonio': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae deleniti, recusandae porro magni, minus ipsam animi ad officiis eligendi natus aut qui, harum impedit pariatur dignissimos commodi veniam saepe adipisci.',
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