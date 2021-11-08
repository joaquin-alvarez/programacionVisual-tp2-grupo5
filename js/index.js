$(function(){ 
    toggleNavBar();
    cargarVista();
});

function toggleNavBar() {
    $('.elemNav').each(function(){
        $(this).on('click', function(){
            $(".navbar-collapse").collapse('hide');  
        });
    });
}

function cargarVista(){
    //Productos
    vistaProductos();

    //Sobre la tienda
    nosotros();
    testimonios();

    //Contacto
    contacto();
}