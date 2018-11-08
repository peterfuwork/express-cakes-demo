const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const data = require('./data');

app.get('/', (req, res, next) => {
    res.send({ message: "hello world" });
    next();
});

app.get('/cakes', (req, res, next) => {
    res.send({ cakes: data })
});

app.get('/cakes/:id', (req, res, next) => {
    let id = parseInt(req.params.id);
    let matchingCake = data.filter(cake => cake.id === id);
    if(!matchingCake.length) {
        res.status(404).send({ message: "hey this doesn't exist" })
    } else {
        res.send({ cake: matchingCake[0] })
    }
});

app.listen(PORT);