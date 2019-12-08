const express = require('express')
const cors = require('cors');

const app = express()

app.use(cors())

app.get('/', (req, res) => res.send(`Hello World from Vagiz's express test server!`))

app.listen(8080, () => console.log('Example app listening on port 8080!'))