const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener('click', function() {
        const cardId = card.getAttribute('id')
        const cardImage = card.querySelector('.card-image')
        const cardAlt = cardImage.querySelector('img').alt
        
        const cardDescription = document.querySelector('.modal-card-description')
        cardDescription.innerHTML = `<p>${cardAlt}</p>`
        
        const cardAuthor = card.querySelector('.card-author p').textContent
        const cardModalAuthor = document.querySelector('.modal-card-author')
        cardModalAuthor.innerHTML = `<p>${cardAuthor}</p>`

        modalOverlay.classList.add('active')
        modalOverlay.querySelector('img').src = `assets/${cardId}.png`  
    })
}

document.querySelector('.modal-close').addEventListener('click', function() {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('img').src = ""
})