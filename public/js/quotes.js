$('a[href*="#"]').click((e) => {
  e.preventDefault();
  $('html, body').animate({ scrollTop:$(this.hash).offset().top }, 500);
});
$('#postQuote').submit((e) => {
  e.preventDefault();
  var data = $('#postQuote').serialize(),
      requestUrl = $('#postQuote').attr('action');
  $.ajax({
    url: requestUrl,
    type: 'POST',
    data: data,
    success: function(res) {
      console.log(res);
    }
  })
})
$('#editQuote').submit((e) => {
  e.preventDefault();
  var data = $('#editQuote').serialize(),
      requestUrl = $('#editQuote').attr('action'),
      quoteId = requestUrl.replace('/quotes/', '');

  data += '&' + $.param({id: quoteId});

  $.ajax({
    url: requestUrl,
    type: 'POST',
    data: data,
    success: function(res) {
      console.log(res);
    }
  })
})
$('#deleteQuote').click((e) => {
  e.preventDefault();
  var requestUrl = $(this).parent().attr('action');
  $.ajax({
    url: requestUrl,
    type: 'DELETE',
    success: function(response) {
      console.log("Deleted!");
    }
  })
});