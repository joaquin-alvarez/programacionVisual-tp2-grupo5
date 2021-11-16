function navbar(){
    let div = document.createElement('div');
    div.className = 'container-fluid';
    div.innerHTML = `
        <div class="navbar-brand"><i class="far fa-gem"></i> Shine</div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item active elemNav"><a class="nav-link" href="#top">Home</a></li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Tienda
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item elemNav" href="#productosFemeninos">Productos Femeninos</a></li>
                        <li><a class="dropdown-item elemNav" href="#productosMasculinos">Productos Masculinos</a></li>
                        <li><a class="dropdown-item elemNav" href="#farmacia">Farmacia</a></li>
                    </ul>
                </li>
                <li class="nav-item elemNav"><a class="nav-link" href="#nosotros">Nosotros</a></li>
                <li class="nav-item elemNav"><a class="nav-link" href="#contacto">Contacto</a></li>
            </ul>	
        </div>
    `;
    
    $('nav').append(div);
}

