$('#Inicio').click(function () {
    $('.body-inicio').addClass('show').removeClass('slow') && $('#Inicio').addClass('nav-link__active')
    $('.body-nosotros').removeClass('show').addClass('slow') && $('#Nosotros').removeClass('nav-link__active')
    $('.body-contacto').removeClass('show').addClass('slow') && $('#Contacto').removeClass('nav-link__active')
    $('.body-información').removeClass('show').addClass('slow') && $('#Informacion').removeClass('nav-link__active')
})

$('#Nosotros').click(function () {
    $('.body-inicio').removeClass('show').addClass('slow') && $('#Inicio').removeClass('nav-link__active')
    $('.body-nosotros').addClass('show').removeClass('slow') && $('#Nosotros').addClass('nav-link__active')
    $('.body-contacto').removeClass('show').addClass('slow') && $('#Contacto').removeClass('nav-link__active')
    $('.body-información').removeClass('show').addClass('slow') && $('#Informacion').removeClass('nav-link__active')
})