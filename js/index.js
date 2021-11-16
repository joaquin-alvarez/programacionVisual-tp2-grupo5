let toggleNavBar = () => {
    $('nav').on('click', function(){
        $('.elemNav').each(function(){
            $(this).on('click', function(){
                $(".navbar-collapse").collapse('hide');  
            });
        });
    });    
}

let cargarVista = () =>{
    //Header
    navbar();
    vistaCarousel();

    //Productos
    vistaProductos();

    //Sobre la tienda
    nosotros();
    testimonios();

    //Contacto
    contacto();
}

$(function(){ 
    toggleNavBar();
    cargarVista();
});
