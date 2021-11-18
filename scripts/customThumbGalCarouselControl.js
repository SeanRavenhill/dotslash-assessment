const carouselBtnPrev = document.getElementById("carousel-control-prev");
const carouselBtnNext = document.getElementById("carousel-control-next");

const carouselInner = document.getElementsByClassName("carousel-inner");

const currentImage = (carouselInner[0].getElementsByClassName("carousel-item active")[0].getElementsByTagName("img")[0].getAttribute("src"))

window.onload = carouselPrevNext;

function carouselPrevNext() {
    carouselBtnPrev.onclick = carouselBtnClicked;
    carouselBtnNext.onclick = carouselBtnClicked;
};

function carouselBtnClicked(e) {
    console.log("testing")
}
