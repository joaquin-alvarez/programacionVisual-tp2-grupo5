$(function(){ 
    toggleNavBar();
    cargaProductos();
});

function toggleNavBar() {
    $('.elemNav').each(function(){
        $(this).on('click', function(){
            $(".navbar-collapse").collapse('hide');  
        });
    });
}

function cargaProductos(){
    //Productos
    vistaProductos();

    //Tienda
    nosotros();
    testimonios();

    //Contacto
    contacto();
}