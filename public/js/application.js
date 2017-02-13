$('.jl-like-button').one('click', function() {
  $.post('/like', function(data) {
    $('.jl-like-button').text('LIKES: ' + data.likeCount);
  });
});

$('#search-button input').on('keyup', function() {
   var query = $('#search-button input').val();
   console.log($('#search-button input').val());
 
   if (query !== "") {
     $.get('/api/search/' + query, function(data) {
       console.log(data);
       $(".jl-app-search-results").html('');
       data.forEach(function(element) {
         $(".jl-app-search-results").append(
           $("<li>" + element.firstname + ' ' + element.lastname + '</li>')
           );
         });
       });
     }
   });
//voor singel user//
$('.jl-SingelUser-button').on('click', function() {
  $.post('/like', function(data) {
    $('.jl-like-button').text('LIKES: ' + data.likeCount);
  });
});
