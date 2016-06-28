var colors = [
	"red",
	"orange", 
	"green", 
	"yellow", 
	"blue", 
	"violet", 
	"indigo",
	"white"
	];

var count = 0;

var cycle = function(array) {
	console.log(array[count]);
	if (count == array.length-1) {
		count = 0;
	} else {
		count++;
	};
};

var display = function(){
	cycle(colors);
};