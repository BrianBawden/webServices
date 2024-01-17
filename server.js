// // express web server

// const express = require("express")
// const app = express();

// const port = 3000

// app.use("/", require("./routes"))

// app.listen(process.env.port || port)
// console.log("Web Server is listening at port " + (process.env.port || port))


// express web server

const express = require("express")
const app = express();

app.get('/', (req, res) => {
  res.send("Brian Bawden")
})

app.get('/kate', (req, res) => {
  res.send("Kate Bawden")
})

const port = 3000

app.listen(process.env.port || port)
console.log(`listening on ${process.env.port || port}`)