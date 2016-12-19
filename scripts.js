$(document).ready(function(){
	$('.yahoo-form').submit(function(){
		//stop the form from submitting (default action) - will stay in console
		event.preventDefault(); 
		// get whatever the user typed out of the input and store it in 
		var symbol = $('#symbol').val();
		//dynamically build the URL to use the symbols the user requested
 		var url= "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20('"+symbol+"')%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json";
 		// console.log(url);
 		//getjson(where to go, what to do)
 		$.getJSON(url, function(data){
 			var stockInfo = data.query.results.quote;
 			console.log(stockInfo);
 			//check to see if change is + or -
 			if(stockInfo.Change.indexOf('+') > -1){
 				//there is a '+' somewhere in this string
 				var classChange = "success";
 			}else{
 				//there is not a '+' in this string (negative daily change)
 				var classChange = "danger";
 			}
 			var newHTML = '';
 			newHTML += '<tr>';
 				newHTML += '<td>' +stockInfo.Symbol+ '</td>';
 				newHTML += '<td>' +stockInfo.Name+ '</td>';
 				newHTML += '<td>' +stockInfo.Ask+ '</td>';
 				newHTML += '<td>' +stockInfo.Bid+ '</td>';
 				newHTML += '<td class="' +classChange+ '">' +stockInfo.Change+ '</td>';
 			newHTML +='</tr>';
 			console.log(newHTML);
 			$('#stock-body').html(newHTML);
 		});
 		// console.log("where is JS?");

	});
});