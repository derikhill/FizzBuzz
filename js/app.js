$(document).ready(function() {

for (var i = 1; i <= 100; i++) {
    
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