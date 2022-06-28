$(window).on('load', function () {
    $('.fondo-spinner').delay(1000).fadeOut('slow');
});

$('#btnEspañol').click(function () {
    document.location = 'español.html'
})
$('#btnEnglish').click(function () {
    document.location = 'english.html'
})