for (let i = 0; i < 16; i++){
    $('#box').append('<button class="button"></button>')
}
$('.button').on('click', function() {
    $(this).toggleClass('darkMode');
  });
