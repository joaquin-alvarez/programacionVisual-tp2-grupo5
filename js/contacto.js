let formulario = () => {
    let div = `
    <div class='col-md-6 margen mb-4'>
        <h3><span><i class="fas fa-spa"></i></span><strong> Escribinos</strong></h3>

        <form class="form" method="post" action="" >
            <div class="form-group pb-2">
                <input class="form-control" type="text" placeholder="Nombre" name="name">
            </div>
            <div class="form-group pb-2">
                <input type="email" class="form-control" placeholder="Email" name="email">
            </div>
            <div class="form-group pb-2">
                <input type="text" class="form-control" placeholder="Asunto" name="subject">
            </div>
            <div class="form-group pb-2">
                <textarea class="form-control" placeholder="Mensaje" name="message"></textarea>
            </div>
            <button type="submit" id="submit" class="btn btn-primary btn-block">Enviar <i class="fab fa-telegram-plane"></i></button>
        </form>	
    </div>    
    `;

    return div;
}

let datosContacto = () => {
    let div = `
    <div class='col-md-6 padLeft'>
        <h3><span><i class="fas fa-spa"></i></span>     <strong>Encontranos</strong></h3>

        <ul class="icons-list">
            <li><span><i class="fas fa-map-marker-alt"></i></span> <strong>Dirección:</strong> Lavalle 648, Ciudad Autónoma de Buenos Aires.</li>
            <li><span><i class="fas fa-envelope"></i></span> <strong>Email:</strong> contacto@tiendashine.com</li>
            <li><span><i class="fab fa-whatsapp"></i></span> <strong>Whatsapp:</strong> +54 9 11 8547-8099</li>
        </ul> 
    </div>    
    `;
    return div;
}

let mapa = () => {
    let map = `
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0701116783302!2d-58.37812478524323!3d-34.60238856493381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacc41153a23%3A0xeb2ed79d5240bc97!2sISTEA%20-%20Educaci%C3%B3n%20IT!5e0!3m2!1ses-419!2sar!4v1635976683286!5m2!1ses-419!2sar" allowfullscreen></iframe>
    `;

    return map;
}

function contacto() {
    let div = document.createElement('div');
    div.className = 'container contacto';
    div.innerHTML = `
        <div class="row">
            ${formulario()}
            ${datosContacto()}
        </div>

        <div class="container-fluid">
            ${mapa()}
        </div>
    `;

    $('#contacto').prepend(div);
}