window.onload = function () {
	slide1();
	slide2();
};

const slider1 = document.getElementById("slider-1");
const slider2 = document.getElementById("slider-2");
const displayValue1 = document.getElementById("slider-1-output");
const displayValue2 = document.getElementById("slider-2-output");
const minGap = 200;
const sliderTrack = document.querySelector(".slider-track");
const sliderMaxValue = document.getElementById("slider-1").max;

function slide1() {
	if (parseInt(slider2.value) - parseInt(slider1.value) <= minGap) {
		slider1.value = parseInt(slider2.value) - minGap;
	}
	displayValue1.textContent = "R" + slider1.value;
	fillColor();
}

function slide2() {
	if (parseInt(slider2.value) - parseInt(slider1.value) <= minGap) {
		slider2.value = parseInt(slider1.value) + minGap;
	}
	displayValue2.textContent = "R" + slider2.value;
	fillColor();
}

function fillColor() {
	percent1 = (slider1.value / sliderMaxValue) * 100;
	percent2 = (slider2.value / sliderMaxValue) * 100;
	sliderTrack.style.background = `linear-gradient(to right, #82828250 ${percent1}% , #00A2FF ${percent1}% , #00A2FF ${percent2}%, #82828250 ${percent2}%)`;
}
