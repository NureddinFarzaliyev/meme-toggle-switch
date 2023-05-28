const toggle = document.querySelector('#toggle')

let switchState = 'day';

const circles = document.querySelectorAll('.circle')

const day = document.querySelector('.day')
const cloud1 = document.querySelector('.day-img-1')
const cloud2 = document.querySelector('.day-img-2')

const star = document.querySelector('.stars')

const label = document.querySelector('.toggle-switch label');
const sun = window.getComputedStyle(label, ':after');


function toggleColors() {
    circles[0].classList.toggle('dayc1')
    circles[0].classList.toggle('nightc1')

    circles[1].classList.toggle('dayc2')
    circles[1].classList.toggle('nightc2')

    circles[2].classList.toggle('dayc3')
    circles[2].classList.toggle('nightc3')

    circles[3].classList.toggle('dayc4')
    circles[3].classList.toggle('nightc4')
}


toggle.addEventListener('change', () => {
    console.log('hi')

    if(switchState == 'day'){
        console.log('to night')
        switchState = 'night'

        // Background
        circles[0].classList.add('circles-to-right')
        circles[1].classList.add('circles-to-right')
        circles[2].classList.add('circles-to-right')

        toggleColors()

        // Day
        cloud1.classList.add('cloud-1-anim-out')
        cloud1.classList.remove('cloud-1-anim-in')

        cloud2.classList.add('cloud-2-anim-out')
        cloud2.classList.remove('cloud-2-anim-in')
    
        // Night
        star.classList.add('stars-in')
        star.classList.remove('stars-out')


    }
    else{
        console.log('to day')
        switchState = 'day'


        // Background
        circles[0].classList.remove('circles-to-right')
        circles[1].classList.remove('circles-to-right')
        circles[2].classList.remove('circles-to-right')

        toggleColors()

        // Day
        cloud1.classList.add('cloud-1-anim-in')
        cloud1.classList.remove('cloud-1-anim-out')

        cloud2.classList.add('cloud-2-anim-in')
        cloud2.classList.remove('cloud-2-anim-out')

        star.classList.remove('stars-in')
        star.classList.add('stars-out')
    }

})