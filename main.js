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

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');

        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000);
    })

})