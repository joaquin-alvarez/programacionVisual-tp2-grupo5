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
    productosFemeninos();
    productosMasculinos();
    productosFarmacia();
    toggleBotonDescripcion();

    //Tienda
    nosotros();
    testimonios();

    //Contacto
    contacto();
}