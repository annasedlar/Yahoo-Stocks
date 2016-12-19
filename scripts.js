$(document).ready(function(){
	$('.yahoo-form').submit(function(){
		//stop the form from submitting (default action)
		event.preventDefault(); 
		var symbol = $('#symbol').val();
		console.log(symbol);

	});
});