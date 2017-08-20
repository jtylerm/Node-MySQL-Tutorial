const express = require('express')
const bodyParser = require('body-parser')
const store = require('./store')
const app = express()

app.use(express.static('public'))
app.use(bodyParser.json())

app.post('/create-contact', (req, res) => {
    store
    .createContact({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    })
    .then(() => res.sendStatus(200))
})

app.listen(8080, () => {
    console.log('Server running on http://localhost:8080')
})