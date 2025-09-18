const axios = require("axios")

console.log("1")

axios.get("https://google.it")
    .then(response => {
        console.log("Risposta ricevuta")
    })
    .catch(error => {
        console.error("Errore nella richiesta")
    })

console.log("2")
console.log("3")