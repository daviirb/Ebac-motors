$(document).ready(function(){
    $('#carousel-images').slick({
        autoplay: true,
    }); 
    
    $('.menu-hamburger').click(function() {
        $('nav').slideToggle();
    });

    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true, 
                email: true
            },
            telefone: {
                required: true
            },
            veiculoInteresse: {
                required: false
            },
            mensagem: {
                required: true
            }
        }
    })

})