import { removeAllChildNodes } from "./modules/utilities"
import getCoins from "./modules/getCoins"
import { renderExchanges } from "./modules/exchanges"
import renderMarkets from "./modules/markets"

const page = document.getElementById("page")
const exchangeBtn = document.getElementById("exchange-link")
const marketsBtn = document.getElementById("markets-link")


// Render Exhanges
getCoins('https://api.coincap.io/v2/exchanges').then(coins => {
    renderExchanges(coins.data)
}).catch(err => {
    console.log(err)
})


exchangeBtn.addEventListener('click', (e) => {
    e.preventDefault

    exchangeBtn.classList.add('active')
    marketsBtn.classList.remove('active')
    removeAllChildNodes(page)

    // Render Exhanges
    getCoins('https://api.coincap.io/v2/exchanges').then(coins => {
        renderExchanges(coins.data)
    }).catch(err => {
        console.log(err)
    })
})

marketsBtn.addEventListener('click', (e) => {
    e.preventDefault

    marketsBtn.classList.add('active')
    exchangeBtn.classList.remove('active')
    removeAllChildNodes(page)

    // Render Markets
    getCoins('https://api.coincap.io/v2/markets').then((coins) => {
        renderMarkets(coins.data)
    }).catch((err) => {
        console.log(err);
    })
})