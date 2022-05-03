import { getDate, convertToInternationalCurrencySystem } from "./utilities"

const exchangeTemp = document.querySelector("[data-exchange-template]")
const headerExchangeTemp = document.querySelector("[data-exchange-header-template]")



 export default function renderExchanges(endpoint) {    
    fetch(endpoint)
    .then((response) => response.json())
    .then((coins) => {
        // console.log(coins.data)
        page.appendChild(headerExchangeTemp.content.cloneNode(true))
        coins.data.map((coin) => {
            const card = exchangeTemp.content.cloneNode(true).children[0]
            const name = card.querySelector("[data-name]")
            const rank = card.querySelector("[data-rank]")
            const percentTotalVolume = card.querySelector("[data-percent-total-volume]")
            const volumeUsd = card.querySelector("[data-volume-usd]")
            const tradingPairs = card.querySelector("[data-trading-pairs]")
            const socket = card.querySelector("[data-socket]")
            const updated = card.querySelector("[data-updated]")
            
            name.textContent = coin.name
            rank.textContent = coin.rank
            percentTotalVolume.textContent = (coin.percentTotalVolume !== null) ? parseFloat(coin.percentTotalVolume).toFixed(2) + '%' : "-"
            volumeUsd.textContent = '$' + convertToInternationalCurrencySystem(coin.volumeUsd)
            tradingPairs.textContent = coin.tradingPairs

            let socketClass = coin.socket ? "on" : "off"
            socket.innerHTML = (coin.socket !== null) ? '<span></span>' : '-'
            socket.classList.add(socketClass)

            updated.textContent = getDate(coin.updated)
            
            page.appendChild(card)
        })

    })
    .catch( error => console.log(error.message) )
}