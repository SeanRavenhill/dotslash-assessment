const thumbBtn1 = document.getElementById("thumb-btn-1");
const thumbBtn2 = document.getElementById("thumb-btn-2");
const thumbBtn3 = document.getElementById("thumb-btn-3");
const thumbBtn4 = document.getElementById("thumb-btn-4");
const thumbBtn5 = document.getElementById("thumb-btn-5");

const thumbBtnArray = [thumbBtn1, thumbBtn2, thumbBtn3, thumbBtn4, thumbBtn5];

// const carouselBtnPrev = document.getElementById("carousel-control-prev");
// const carouselBtnNext = document.getElementById("carousel-control-next");

// const carouselInner = document.getElementsByClassName("carousel-inner");

// let currentImage = (carouselInner[0].getElementsByClassName("carousel-item active")[0].getElementsByTagName("img")[0].getAttribute("src"))

window.onload = btnsClicked;

function btnsClicked() {
	thumbBtn1.onclick = clicked;
	thumbBtn2.onclick = clicked;
	thumbBtn3.onclick = clicked;
	thumbBtn4.onclick = clicked;
	thumbBtn5.onclick = clicked;
	// carouselBtnPrev.onclick = clicked;
	// carouselBtnNext.onclick = clicked;
}

function clicked(e) {
	// currentImage = (carouselInner[0].getElementsByClassName("carousel-item active")[0].getElementsByTagName("img")[0].getAttribute("src"))
	// console.log(currentImage)
	let thumbBtnActiveToggle = e.target;
	for (const thumbBtn of thumbBtnArray) {
		if (thumbBtn.className === "custom-carousel-thumb-btn custom-active") {
			thumbBtn.classList.remove("custom-active");
		}
	}
	thumbBtnActiveToggle.classList.add("custom-active");
}
