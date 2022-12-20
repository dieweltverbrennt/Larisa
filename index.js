// Navbar manager
const headerMenuOpenButton = document.querySelector(".header-menu-open-button");
const headerMenuCloseButton = document.querySelector(".header-menu-close-button");
const mobileNavbar = document.querySelector(".mobile-navbar");

headerMenuOpenButton.addEventListener("click", () => {
    mobileNavbar.classList.remove("hidden");
    headerMenuOpenButton.classList.add("hidden");
    headerMenuCloseButton.classList.remove("hidden")
})

headerMenuCloseButton.addEventListener("click", () => {
    mobileNavbar.classList.add("hidden");
    headerMenuOpenButton.classList.remove("hidden");
    headerMenuCloseButton.classList.add("hidden")
})

// Slider manager
const sliderItems = Array.from(document.querySelectorAll(".slider-item"));
const sliderArrowLeft = document.querySelector(".left-arrow");
const sliderArrowRight = document.querySelector(".right-arrow");
const sliderDots = Array.from(document.querySelectorAll(".slider__dot"));

function setSlide(index) {
    sliderItems[currentSlide].classList.remove("slider-item-active");
    sliderDots[currentSlide].classList.remove("slider__dot_active");
    sliderItems[index].classList.add("slider-item-active");
    sliderDots[index].classList.add("slider__dot_active");
}

let currentSlide = 0;
setSlide(currentSlide);

sliderArrowLeft.onclick = () => {
    let index;
    currentSlide = sliderItems.findIndex((item) => item.classList.contains("slider-item-active"));
    if(currentSlide === 0) {
        index = sliderItems.length - 1;
    }
    else {
        index = currentSlide - 1;
    }
    setSlide(index);
};

sliderArrowRight.onclick = () => {
    let index;
    currentSlide = sliderItems.findIndex((item) => item.classList.contains("slider-item-active"));
    if(currentSlide === sliderItems.length - 1) {
        index = 0;
    }
    else {
        index = currentSlide + 1;
    }
    setSlide(index);
};

for(let i = 0; i < sliderDots.length; i++) {
    sliderDots[i].onclick = () => {
        currentSlide = sliderItems.findIndex((item) => item.classList.contains("slider-item-active"));
        setSlide(i);
    }
}