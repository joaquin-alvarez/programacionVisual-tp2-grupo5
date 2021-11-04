function testimonios() {
    let div = document.createElement('div');
    div.className = 'container';
    div.innerHTML = `
        <h2><span><i class="far fa-gem"></i></span><strong> Nuestros</strong> clientes</h2>
        <div class="row mb-4">
            <div class="col-md-4 col-sm-12">
                <img src="images/clientes/01.jpg" alt="" class="img-fluid w-100">
            </div>
            <div class="col-md-8 col-sm-12">
                <h3><span><i class="fas fa-spa"></i></span><strong> Juan</strong> Pérez</h3>
                <p><span><i class="fas fa-quote-left"></i></span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae deleniti, recusandae porro magni, minus ipsam animi ad officiis eligendi natus aut qui, harum impedit pariatur dignissimos commodi veniam saepe adipisci. <span><i class="fas fa-quote-right"></i></span></p>
                <div class="social">
                    <a class="social" href="#" target="_blank">
                        <span><i class="fab fa-instagram"></i></span>
                    </a> 
                    <a class="social" href="#" target="_blank"> 
                        <span><i class="fab fa-facebook"></i></span>
                    </a>
                </div>
            </div>
        </div>
        <div class="row">	
            <div class="col-md-4 col-sm-12">
                <img src="images/clientes/02.jpg" alt="" class="img-fluid w-100">
            </div>
            <div class="col-md-8 col-sm-12">
                <h3><span><i class="fas fa-spa"></i></span><strong> Ana</strong> Clara</h3>
                <p><span><i class="fas fa-quote-left"></i></span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae deleniti, recusandae porro magni, minus ipsam animi ad officiis eligendi natus aut qui, harum impedit pariatur dignissimos commodi veniam saepe adipisci. <span><i class="fas fa-quote-right"></i></span></p>
                <div class="social">
                    <a class="social" href="#" target="_blank">
                        <span><i class="fab fa-instagram"></i></span>
                    </a> 
                    <a class="social" href="#" target="_blank"> 
                        <span><i class="fab fa-facebook"></i></span>
                    </a>
                </div>
            </div>
        </div>
    `;
    $('.testimonios').append(div);
}