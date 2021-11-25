const thumbBtn1 = document.getElementById("thumb-btn-1");
const thumbBtn2 = document.getElementById("thumb-btn-2");
const thumbBtn3 = document.getElementById("thumb-btn-3");
const thumbBtn4 = document.getElementById("thumb-btn-4");
const thumbBtn5 = document.getElementById("thumb-btn-5");

const thumbBtnArray = [thumbBtn1, thumbBtn2, thumbBtn3, thumbBtn4, thumbBtn5];

window.onload = thumbBtnsClicked();

function thumbBtnsClicked() {
	thumbBtn1.onclick = clicked;
	thumbBtn2.onclick = clicked;
	thumbBtn3.onclick = clicked;
	thumbBtn4.onclick = clicked;
	thumbBtn5.onclick = clicked;
}

function clicked(e) {
	let thumbBtnActiveToggle = e.target;
	for (const thumbBtn of thumbBtnArray) {
		if (thumbBtn.className === "custom-carousel-thumb-btn custom-active") {
			thumbBtn.classList.remove("custom-active");
		}
	}
	thumbBtnActiveToggle.classList.add("custom-active");
}

const prevBtn = document.getElementById("carousel-control-prev");
const nextBtn = document.getElementById("carousel-control-next");

window.onload = carouselBtnsClicked();

function carouselBtnsClicked() {
	prevBtn.onclick = carouselClicked;
	nextBtn.onclick = carouselClicked;
}

let indexPos = 0;

function carouselClicked(e) {
	let carouselBtnClicked = e.target.className;
	console.log(carouselBtnClicked);
	if (carouselBtnClicked === "carousel-control-next-icon") {
		for (const thumbBtn of thumbBtnArray) {
			if (thumbBtn.className === "custom-carousel-thumb-btn custom-active") {
				thumbBtn.classList.remove("custom-active");
				indexPos = thumbBtnArray.indexOf(thumbBtn) + 1;
				console.log(indexPos);
			}
		}
		if (indexPos === 5) {
			thumbBtnArray[0].classList.add("custom-active");
		} else {
			thumbBtnArray[indexPos].classList.add("custom-active");
		}
	} else if (carouselBtnClicked === "carousel-control-prev-icon") {
		for (const thumbBtn of thumbBtnArray) {
			if (thumbBtn.className === "custom-carousel-thumb-btn custom-active") {
				thumbBtn.classList.remove("custom-active");
				indexPos = thumbBtnArray.indexOf(thumbBtn) - 1;
			}
		}
		if (indexPos === -1) {
			thumbBtnArray[4].classList.add("custom-active");
		} else {
			thumbBtnArray[indexPos].classList.add("custom-active");
		}
	}
}
