const express = require('express')
const app = express()
const port = 3000

app.use('/', express.static('./dist', {
  index: "index.html"
}))

app.use((err, req, res, next) => {
    if (process.env.NODE_ENV !== 'test') console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error')
  })
  

app.listen(port, () => console.log(`Online-Store app listening on port ${port}!`))