const express = require("express")

const app = express()

app.get("/querystring", (req, res) => {
    console.log("Le query string passate sono:", req.query)
    res.send("ok")
})

app.get("/pathparams/:A/:B", (req, res) => {
    console.log("I parametri del percorso sono:", req.params)
    res.send("ok")
})

app.listen(3000, () => {
    console.log("Server is listening on http://localhost:3000")
})