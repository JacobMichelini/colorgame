console.log("connected")

console.log("**reverse**")////////////////

function printReverse(array) {
	for (var i = array.length - 1; i >= 0; i--) {
		console.log(array[i]);
	}
}

var input = [1,2,3,4,5];

printReverse(input);






console.log("**uniform**");////////////////

function isUniform(array) {
	var first = array[0];
	for (var i = 1; i < array.length; i++) {
		if (array[i] !== first) {
			console.log("false")
			return false;
		}
	}
	console.log("true")
	return true;
}


isUniform([1,1,1,1]);
isUniform([2,1,1,1]);
isUniform(["a","b","p"]);
isUniform(["b","b","b"]);






console.log("**sum**")//////////////////

// function sumArray(array) {
// 	var sum = 0;
// 	for (var i = 0; i < array.length; i++) {
// 		sum = sum + array[i];
// 	}
// 	console.log(sum);
// }

function sumArray(array) {
	var sum = 0;
	array.forEach(function(elem) {
		sum += elem ;
	});
	console.log(sum);
	return sum;
}

sumArray([1,2,3]); //6
sumArray([10,3,10,4]); //27
sumArray([-5,100]); //95






console.log("**max**")//////////////

function max(array) {
	var maxNum = array[0];

	for (var i = 0; i < array.length; i++) {
		if(array[i] > maxNum) {
			maxNum = array[i];
		}
	}
	console.log(maxNum);
}

max([1,2,3]); //3
max([10,3,10,4]); //10
max([-5,100]); //100