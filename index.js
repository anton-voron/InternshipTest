var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
 
input1.addEventListener('change', firstHandleImage);
input2.addEventListener('change', secoundHandleImage);

function upload (img, x, y, x2, y2) {
	var width = (img.width * 100 / img.height);
	ctx.clearRect(x, y, 200, 100);
	ctx.clearRect(x2, y2, 200, 100);
	if (flipper.name == "row") {
		ctx.drawImage(img, x, y, width, 100);
	} else if (flipper.name == "column") {
		ctx.drawImage(img, x2, y2, width, 100);
	}
};

function uploadReader (e, input, x, y, x2, y2) {
	var reader = new FileReader();
	reader.onload = function (evt) {
		var img = new Image();
		img.onload = function () {
			upload(img, x, y, x2, y2);
		}
		img.src = evt.target.result;
		input.src = evt.target.result;
	}
	reader.readAsDataURL(e.target.files[0]);
	input.e = e;
};

function uploadValidator () {
	if (input1.value) {
			uploadReader (input1.e, input1, 0, 0, 0, 0);
	}; 
	if (input2.value) {
		uploadReader (input2.e, input2, 230, 0, 0, 120);
	}
};


function firstHandleImage (e) {
		e.preventDefault();
		uploadReader (e, input1, 0, 0, 0, 0);	
};

function secoundHandleImage (e) {
	e.preventDefault();
		uploadReader(e, input2, 230, 0, 0, 120);		
};

var flipper = document.getElementById('checkbox');
flipper.addEventListener('click', update);
function update () {
	if (flipper.name == "row") {
		flipper.name = "column";
		uploadValidator();
		flipper.checked = true;	
	}
	else if(flipper.name == "column") {
		flipper.name = "row";
		uploadValidator();
		flipper.checked = false;
	}
}