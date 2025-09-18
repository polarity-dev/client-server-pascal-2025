const express = require("express")

const app = express()

// http://localhost:3000/querystring?pippo=pluto&paperino=topolino
// req.query = { pippo: "pluto", paperino: "topolino" }

app.get("/querystring", (req, res) => {
    console.log("Le query string passate sono:", req.query)
    res.send("ok")
})

// http://localhost:3000/pathparams/1/pluto
// req.params = { A: "1", B: "pluto" }
app.get("/pathparams/:A/:B", (req, res) => {
    const A = req.params.A
    const B = req.params.B

    if (isNaN(A) || isNaN(B)) {
        res
            .status(400)
            .send("A e B devono essere numeri")

        return
    }

    console.log("I parametri del percorso sono:", req.params)
    res.send("ok")
})

app.listen(3000, () => {
    console.log("Server is listening on http://localhost:3000")
})