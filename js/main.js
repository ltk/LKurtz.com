$('.modal-toggle').on('click', function(e){
	e.preventDefault;
	var target = $(this).attr('href');
	$(target).modal();
});
$("form").submit(function() {
  var email = $("#email").val();
  var message = $("#message").val();
  var skype = $("#skype").val();

  var valid_email = false;
  var valid_message = false;

  if (isValidEmailAddress(email)) {
    valid_email = true;
  }

  if (message != "") {
    valid_message = true;
  }

  if( valid_email && valid_message ) {
  	$.ajax({
	  type: "POST",
	  url: "submit-to-asana.php",
	  data: { email: email, skype: skype, message: message }
	}).done(function( msg ) {
	  if(msg == 'yep') {
	  	$(".form-errors").hide();
	  	$(".form-success").text("Thanks! I'll be in touch with you soon.").show();
	  	$("form").hide();
	  } else {
	  	$(".form-errors").text("Hmmm... I didn't get your message. Try again?").show();
	  }  
	});
  } else if( !valid_email && !valid_message ) {
  	$(".form-errors").text("Could I trouble you for your email address and a quick message?").show();
  } else if( !valid_email ) {
  	$(".form-errors").text("Could I trouble you for your email address (a valid one)?").show();
  } else {
  	$(".form-errors").text("Care to leave a message?").show();
  }
  return false;
});