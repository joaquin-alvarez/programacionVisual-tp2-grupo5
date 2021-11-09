function nosotros(){
    let div = document.createElement('div');
    div.className = 'row';
    div.innerHTML = `
        <h2><span><i class="far fa-gem"></i> Shine</span> - Tienda Online</h2>
        <p>Devoción por la Salud y el Bienestar. Obsesión por transformar la piel a partir de la conjunción de la Investigación, la Tecnología, y la Naturaleza. Estos son nuestros fundamentos para brindar los mejores productos del mercado!</p>
        <a class="btn btn-primary mt-2" id="botonNosotros" href="#contacto">Escribinos!</a>
    `;
    $('#nosotros').append(div);
}