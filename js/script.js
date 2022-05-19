const slider = document.querySelector('.slider')
    line1 = document.querySelector('#line1')
    line2 = document.querySelector('#line2')

line1.addEventListener('click', function() {
    slider.style.transform = "translateX(0%)"
})

line2.addEventListener('click', function() {
    slider.style.transform = "translateX(-33.5%)"
})

const sliderSec = document.querySelector('.slider-sec')
    Line1 = document.querySelector('#line-1')
    Line2 = document.querySelector('#line-2')

Line1.addEventListener('click', function() {
    sliderSec.style.transform = "translateX(0%)"
})

Line2.addEventListener('click', function() {
    sliderSec.style.transform = "translateX(-46.5%)"
})

const Sliderf = document.querySelector('.slider-f')
    LiNe1 = document.querySelector('#line-1-f')
    LiNe2 = document.querySelector('#line-2-f')

LiNe1.addEventListener('click', function() {
    Sliderf.style.transform = "translateX(0%)"
})

LiNe2.addEventListener('click', function() {
    Sliderf.style.transform = "translateX(-34%)"
})