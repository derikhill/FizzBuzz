$(document).ready(function() {

$("#userNumber").keypress(function(event) {
    if(event.which == 13) {
        var input = $("#userNumber").val();
        event.preventDefault();
        var i;

    }


for (var i = 1; i <= 100 && i <=input; i++) {
    
	if(i % 15 === 0) {
	$('#fizz').append('<p>fizzbuzz</p>');
	}
    else if(i % 3 === 0) {
    $('#fizz').append('<p>fizz</p>');
    }
    else if (i % 5 === 0) {
    $('#fizz').append('<p>buzz</p>');
    }
    else {
    $('#fizz').append('<p>' + i + '</p>');
    }
}
});
});