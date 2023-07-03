const errorCard = document.getElementById('error-card-display');
const successCard = document.getElementById('success-card-display');


setTimeout(function displayCard() {
    if (errorCard.style.display = 'flex') {
        successCard.style.display = 'none';
    }
}, 2000)