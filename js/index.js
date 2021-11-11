let toggleNavBar = () => {
    $('.elemNav').each(function(){
        $(this).on('click', function(){
            $(".navbar-collapse").collapse('hide');  
        });
    });
}

let cargarVista = () =>{
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
