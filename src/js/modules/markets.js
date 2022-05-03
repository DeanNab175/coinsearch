import { convertToInternationalCurrencySystem, checkIfImageExists } from "./utilities"

const marketsTemp = document.querySelector("[data-markets-template]")
const headerMarketsTemp = document.querySelector("[data-markets-header-template]")

//  export default function renderMarkets(endpoint) {    
//     fetch(endpoint)
//     .then((response) => response.json())
//     .then((coins) => {
//         // console.log(coins.data)        
//         page.appendChild(headerMarketsTemp.content.cloneNode(true))
//         coins.data.map((coin) => {
//             const card = marketsTemp.content.cloneNode(true).children[0]
//             const name = card.querySelector("[data-name]")
//             const rank = card.querySelector("[data-rank]")
//             // const priceQuote = card.querySelector("[data-price-quote]")
//             const priceUsd = card.querySelector("[data-price-usd]")
//             const volumeUsd = card.querySelector("[data-volume-usd]")
//             const percentExchangeVolume = card.querySelector("[data-percent-exchange-volume]")
//             const tradesCount = card.querySelector("[data-trades-count]")
//             let imageUrl = ""

//             checkIfImageExists(`https://assets.coincap.io/assets/icons/${coin.baseSymbol.toLowerCase()}@2x.png`, (exists) => {
//                 if (exists) {
//                     name.innerHTML = `
//                     <img
//                     src="https://assets.coincap.io/assets/icons/${coin.baseSymbol.toLowerCase()}@2x.png"
//                     alt="${coin.baseId}"
//                     width="20"
//                     />
//                     <div>
//                         <span>${coin.baseId}</span>
//                         <span>${coin.baseSymbol}</span>
//                     </div>
//                     `
//                 } else {
//                     name.innerHTML = `
//                     <img
//                     src="images/default_img.png"
//                     alt="${coin.baseId}"
//                     width="20"
//                     />
//                     <div>
//                         <span>${coin.baseId}</span>
//                         <span>${coin.baseSymbol}</span>
//                     </div>
//                     `
//                 }
//             });


            
//             rank.textContent = coin.rank
//             // priceQuote.textContent = parseFloat(coin.priceQuote).toFixed(2)
//             priceUsd.textContent = "$" + convertToInternationalCurrencySystem(parseFloat(coin.priceUsd))
//             volumeUsd.textContent = "$" + convertToInternationalCurrencySystem(parseFloat(coin.volumeUsd24Hr))
//             percentExchangeVolume.textContent = (coin.percentExchangeVolume !== null) ? parseFloat(coin.percentExchangeVolume).toFixed(2) : "-"
//             tradesCount.textContent = (coin.tradesCount24Hr !== null) ? parseFloat(coin.tradesCount24Hr).toFixed(2) : "-"
            
//             page.appendChild(card)
//         })

//     })
//     .catch( error => console.log(error.message) )
// }


export default function renderMarkets(data) {
    page.appendChild(headerMarketsTemp.content.cloneNode(true))
    data.map((coin) => {
        const card = marketsTemp.content.cloneNode(true).children[0]
        const name = card.querySelector("[data-name]")
        const rank = card.querySelector("[data-rank]")
        // const priceQuote = card.querySelector("[data-price-quote]")
        const priceUsd = card.querySelector("[data-price-usd]")
        const volumeUsd = card.querySelector("[data-volume-usd]")
        const percentExchangeVolume = card.querySelector("[data-percent-exchange-volume]")
        const tradesCount = card.querySelector("[data-trades-count]")
        let imageUrl = ""

        checkIfImageExists(`https://assets.coincap.io/assets/icons/${coin.baseSymbol.toLowerCase()}@2x.png`, (exists) => {
            if (exists) {
                name.innerHTML = `
                <img
                src="https://assets.coincap.io/assets/icons/${coin.baseSymbol.toLowerCase()}@2x.png"
                alt="${coin.baseId}"
                width="20"
                />
                <div>
                    <span>${coin.baseId}</span>
                    <span>${coin.baseSymbol}</span>
                </div>
                `
            } else {
                name.innerHTML = `
                <img
                src="images/default_img.png"
                alt="${coin.baseId}"
                width="20"
                />
                <div>
                    <span>${coin.baseId}</span>
                    <span>${coin.baseSymbol}</span>
                </div>
                `
            }
        });

        rank.textContent = coin.rank
        // priceQuote.textContent = parseFloat(coin.priceQuote).toFixed(2)
        priceUsd.textContent = "$" + convertToInternationalCurrencySystem(parseFloat(coin.priceUsd))
        volumeUsd.textContent = "$" + convertToInternationalCurrencySystem(parseFloat(coin.volumeUsd24Hr))
        percentExchangeVolume.textContent = (coin.percentExchangeVolume !== null) ? parseFloat(coin.percentExchangeVolume).toFixed(2) : "-"
        tradesCount.textContent = (coin.tradesCount24Hr !== null) ? parseFloat(coin.tradesCount24Hr).toFixed(2) : "-"
        
        page.appendChild(card)
    })
}