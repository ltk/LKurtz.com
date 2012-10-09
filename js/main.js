$('.modal-toggle').on('click', function(e){
	e.preventDefault;
	var target = $(this).attr('href');
	$(target).modal();
});