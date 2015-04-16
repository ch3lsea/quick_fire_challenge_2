var a1 = [1,2,3,4,5,6,7,8];
var a2 = [1,2,3,4,5,6,7,8];
var a3 = [8,7,6,5,4,3,2,1];
var a4 = [8,7,6,5,4,3,2,1];

var master = [a1, a2, a3, a4];

function add1(addInput) {
	addInput += 1;
	return addInput;
}

function doubleDown(addInput) {
	var mult = addInput * 2;
	return mult;
}

for (var i = 0; i < master.length; i++) {
	master[i];
	for (var j = 0; j < master[i].length; j++) {
		master[i][j] = add1(master[i][j]);
		master[i][j] = doubleDown(master[i][j]);
	}
};

console.log(master);

document.getElementById("masterIj").innerHTML = "This is something cool.";











