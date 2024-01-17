const brianRoute = (req, res) => {
  res.send("Brian Bawden")
}

const kateRoute = (req, res) => {
  res.send("Kate Bawden")
}

module.exports = {
  brianRoute,
  kateRoute
}