function vistaCarousel(){
    $.getJSON('https://my-json-server.typicode.com/joaquin-alvarez/fakeapi-grupo5/db', function(data){
        let arrImg = [];
        console.log(data.header_images);        
        data.header_images.forEach(imagen => {
            arrImg.push(`
                <div class="carousel-item" id=${imagen.id}>
                    <img src="${imagen.imagen}" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5><i class="far fa-gem"></i>${imagen.titulo}</h5>
                        <p class="toggleParrafo">${imagen.texto}</p>
                        <a class="btn btn-primary" href="${imagen.href}">${imagen.textoB}</a>
                    </div>
                </div>
            `);
        });

        let str = '';

        for (const imagen of arrImg) {
            str += imagen;
        }

        $('#carouselExampleCaptions').append(`
            <div class='carousel-inner'>
                ${str}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        `);  

        $('#img1').addClass('active');
    })
    .fail((jqxhr, textStatus, error ) => {
        let err = `${textStatus}, ${error}`
        console.log(err);
    }); 
}