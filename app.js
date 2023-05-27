const toggle = document.querySelector('#toggle')
const day = document.querySelector('.day')
const night = document.querySelector('.night')

toggle.addEventListener('change', () => {
    console.log('hi')
    day.classList.toggle('hidden')
    night.classList.toggle('hidden')
})