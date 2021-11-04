function nosotros(){
    let div = document.createElement('div');
    div.className = 'row';
    div.innerHTML = `
        <h2><span><i class="far fa-gem"></i> Shine</span> - Tienda Online</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa optio nesciunt dolore? Esse, quo modi nihil reiciendis, veniam impedit quia maiores suscipit eius quis tempore expedita, omnis consequatur voluptatem. Assumenda?</p>
        <a class="btn btn-primary mt-2" id="botonNosotros" href="#contacto">Escribinos!</a>
    `;
    $('#nosotros').append(div);
}