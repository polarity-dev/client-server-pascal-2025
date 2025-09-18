const axios = require("axios")

console.log("Prima chiamata")

axios
    .get("http://localhost:3000/querystring?pippo=pluto&paperino=topolino")
    .then(response => {
        console.log("Risposta 1")
    })

console.log("Seconda chiamata")

axios
    .get("http://localhost:3000/pathparams/10/20")
    .then(response => {
        console.log("Risposta 2")
    })