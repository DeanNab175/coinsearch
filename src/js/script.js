import { removeAllChildNodes } from "./modules/utilities"
import renderExchanges from "./modules/exchanges"
import renderMarkets from "./modules/markets"

const page = document.getElementById("page")
const exchangeBtn = document.getElementById("exchange-link")
const marketsBtn = document.getElementById("markets-link")

renderExchanges('https://api.coincap.io/v2/exchanges')
// renderMarkets('https://api.coincap.io/v2/markets')


exchangeBtn.addEventListener('click', (e) => {
    e.preventDefault
    exchangeBtn.classList.add('active')
    marketsBtn.classList.remove('active')
    removeAllChildNodes(page)
    renderExchanges('https://api.coincap.io/v2/exchanges')
    // console.log("exchangeBtn clicked")
})

marketsBtn.addEventListener('click', (e) => {
    e.preventDefault
    marketsBtn.classList.add('active')
    exchangeBtn.classList.remove('active')
    removeAllChildNodes(page)
    renderMarkets('https://api.coincap.io/v2/markets')
    // console.log("marketsBtn clicked");
})