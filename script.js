const btnStart = document.querySelector('.start')
const game = document.querySelector('.game')
const numb = document.querySelector('.numb')
const btns = document.querySelector('.btns')
const no_small = document.querySelector('.no__one')
const no_big = document.querySelector('.no__two') 
const yes = document.querySelector('.yes') 
const btnEnd = document.querySelector('.end__btn')
const end_game = document.querySelector('.end__game')



// шаг 1: начало игры после нажатия на кнопку старт
btnStart.addEventListener('click', () => {
    hidden(btnStart)
    show(game)
    change()
})

function change() {
    let min = 1
    let max = 101
    play(min, max)
    no_small.addEventListener('click', () => {
        max = Math.floor((max + min)/2)
        play(min, max)
    })

    no_big.addEventListener('click', () => {
        min = Math.floor((max + min)/2)
        play(min, max)
    })

    yes.addEventListener('click', () => {
        end()
    })

}

function play(min, max) {
    numb.textContent = Math.floor((max + min)/2)
}

function end() {
    hidden(btns)
    show(end_game)
    btnEnd.addEventListener('click', () => {
        change()
        show(btns)
        hidden(end_game)
    })
}

function hidden(name) {
    name.classList.add('hidden')
}

function show(name) {
    name.classList.remove('hidden')
}
