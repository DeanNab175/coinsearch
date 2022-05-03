export default function getCoins(endpoint) {
    return new Promise((resolve, reject) => {
        fetch(endpoint)
            .then((response) => response.json())
            .then((data) => {
                resolve(data)
            })
            .catch(err => {
                reject(err)
            })
    })
}