let testimoniosUsuarios = (data) =>{
    let arrTestimonios = [];

    data.testimonios.usuarios.forEach(function(testimonio){
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

    $.getJSON('https://my-json-server.typicode.com/joaquin-alvarez/fakeapi-grupo5/db', function(data){

        let div = document.createElement('div');
        div.className = 'container';
        div.innerHTML = `
            <h2><span><i class="far fa-gem"></i></span><strong> Nuestros</strong> clientes</h2>
    
            ${testimoniosUsuarios(data)}
        `;
    
        $('.testimonios').append(div);
    });    
}