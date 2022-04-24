const modalBtn = document.querySelector('.modal__button')
const modal = document.querySelector('.modal')
const courseBtn = document.querySelector('.course__button');
const XBtn = document.querySelector('#cancel-button')

courseBtn.addEventListener('click', () => {
    modal.style.display = 'flex'
})

XBtn.addEventListener('click', () => {
    modal.style.display = ''
})

modalBtn.addEventListener('click', () => {
    modal.style.display ='flex'
})

modal.addEventListener('click', (event) => {
    const modalContent = event.target.closest('.modal__inner')
    console.log(modalContent)
    if (!modalContent){
        modal.style.display =''
    }
})
