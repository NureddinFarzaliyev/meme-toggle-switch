const toggle = document.querySelector('#toggle')

let switchState = 'day';

const circles = document.querySelectorAll('.circle')

const day = document.querySelector('.day')
const cloud1 = document.querySelector('.day-img-1')
const cloud2 = document.querySelector('.day-img-2')

const night = document.querySelector('.night')


toggle.addEventListener('change', () => {
    console.log('hi')

    // day.classList.toggle('hidden')
    // night.classList.toggle('hidden')

    if(switchState == 'day'){
        console.log('to night')
        switchState = 'night'

        // Background
        circles[0].classList.add('circles-to-right')
        circles[1].classList.add('circles-to-right')
        circles[2].classList.add('circles-to-right')


        // Day
        cloud1.classList.add('cloud-1-anim-out')
        cloud1.classList.remove('cloud-1-anim-in')

        cloud2.classList.add('cloud-2-anim-out')
        cloud2.classList.remove('cloud-2-anim-in')
        


    }
    else{
        console.log('to day')
        switchState = 'day'

        // Background
        circles[0].classList.remove('circles-to-right')
        circles[1].classList.remove('circles-to-right')
        circles[2].classList.remove('circles-to-right')

        // Day
        cloud1.classList.add('cloud-1-anim-in')
        cloud1.classList.remove('cloud-1-anim-out')

        cloud2.classList.add('cloud-2-anim-in')
        cloud2.classList.remove('cloud-2-anim-out')

    }

})