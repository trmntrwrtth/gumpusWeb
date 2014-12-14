$(function() {
  $('#showMore').on('click.showMore', function(ev){
  	$('main').find('article').removeClass('hidden');
  	$('#showMore').addClass('hidden');
  });
});