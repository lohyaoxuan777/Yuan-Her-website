import $ from 'jquery';

$('.aboutinfo').slideUp("fast")
$('.aboutme').click(() => { 
    $('.aboutinfo').slideToggle();
});