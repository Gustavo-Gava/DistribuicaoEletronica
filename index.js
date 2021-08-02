const express = require('express')
const app = express()
const path = require('path')
const port = 3000
const props = require('./model/calculator')

app.use('/', express.static(path.join(__dirname, 'public')))

app.post('/newElement', express.json(), (req, res) => {
    let element = req.body.element
    let charge = req.body.charge

    elemento = props.newElement(element, charge)
    res.json(elemento)
})

app.listen(port, () => console.log(`Server Running on Port ${port}`))