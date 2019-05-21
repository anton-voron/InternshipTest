var input1 = document.getElementById('input1');
input1.validate = false;
input1.src;
input1.e;

var input2 = document.getElementById('input2');
input2.validate = false;
input2.src;
input2.e;
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
 


input1.addEventListener('change', firstHandleImage);
input2.addEventListener('change', secoundHandleImage);

function upload (img, x, y, x2, y2) {
	
		if (flipper.name == "row") {
			var width = (img.width * 100 / img.height);
			ctx.clearRect(x, y, 200, 100);
			ctx.clearRect(x2, y2, 200, 100);
			ctx.drawImage(img, x, y, width, 100);
		} else if (flipper.name == "column") {
			var width = (img.width * 100 / img.height);
			ctx.clearRect(x, y, 200, 100);
			ctx.clearRect(x2, y2, 200, 100);
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


function firstHandleImage (e) {
		e.preventDefault();
		input1.validate = true;
		uploadReader (e, input1, 0, 0, 0, 0);
		
		uploadReader (input2.e, input2, 230, 0, 0, 120);
};

function secoundHandleImage (e) {
	e.preventDefault();
	input2.validate = true;
		uploadReader(e, input2, 230, 0, 0, 120);
		
};

var flipper = document.querySelector('.switch-btn');
flipper.addEventListener('click', update);

var circle = document.querySelector('.btn-indicator');

function update (evt) {
	evt.preventDefault();
	if (flipper.name == "row") {
		flipper.name = "column";
		if( input1.validate == true && input2.validate == true) {
			uploadReader (input1.e, input1, 0, 0, 0, 0);
			uploadReader (input2.e, input2, 230, 0, 0, 120);
		}
	  
		flipper.classList.remove("switch-btn-disable");
		flipper.classList.add("switch-btn-active");

		circle.classList.remove("disable");
		circle.classList.add("active");
	} 
	else if(flipper.name == "column") {
		flipper.name = "row";
		if( input1.validate == true && input2.validate == true) {
			uploadReader (input1.e, input1, 0, 0, 0, 0);
			uploadReader (input2.e, input2, 230, 0, 0, 120);
		}
		
		flipper.classList.remove("switch-btn-active");
		flipper.classList.add("switch-btn-disable");

		circle.classList.remove("active");
		circle.classList.add("disable");

	}
}



					