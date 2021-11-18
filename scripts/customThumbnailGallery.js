const thumbBtn1 = document.getElementById("thumb-btn-1");
const thumbBtn2 = document.getElementById("thumb-btn-2");
const thumbBtn3 = document.getElementById("thumb-btn-3");
const thumbBtn4 = document.getElementById("thumb-btn-4");
const thumbBtn5 = document.getElementById("thumb-btn-5");

const thumbBtnArray = [thumbBtn1, thumbBtn2, thumbBtn3, thumbBtn4, thumbBtn5];

window.onload = thumbBtnGallery;

// function thumbBtnGallery() {
//   document.getElementById("thumbnail-btn-gallery").onclick = clicked;
// };

function thumbBtnGallery() {
	thumbBtn1.onclick = clicked;
	thumbBtn2.onclick = clicked;
	thumbBtn3.onclick = clicked;
	thumbBtn4.onclick = clicked;
	thumbBtn5.onclick = clicked;
}

function clicked(e) {
	let thumbBtnActiveToggle = e.target.classList;
	for (const thumbBtn of thumbBtnArray) {
		if (thumbBtn.className === "custom-carousel-thumb-btn custom-active") {
			thumbBtn.classList.remove("custom-active");
		}
	}
	thumbBtnActiveToggle.add("custom-active");
}
