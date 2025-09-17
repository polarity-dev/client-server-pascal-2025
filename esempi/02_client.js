const axios = require("axios")

const main = async () => {
    const responseA = await axios.get("http://localhost:3000/querystring?pippo=pluto&paperino=topolino")
    console.log("Risposta A:", responseA.data)

    const responseB = await axios.get("http://localhost:3000/pathparams/ciao/mondo")
    console.log("Risposta B:", responseB.data)
}

main()