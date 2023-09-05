//initialize app


const express = require('express');
const petData = require('./data')
const app = express();

//PORT number
const PORT = 1958;


//create API 

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});



app.get('/api/v1/pets', (req, res) => {
    res.send(petData)
});

app.get('/api/v1/pets/owner', (req, res) => {
    const ownerName = req.query.owner;
    const owner = petData.find(pet => pet.owner === ownerName);
    res.send(`Annyeoung ${owner}`)
});



app.get('/api/v1/pets/pet/:name', (req, res) => {
    const name = req.params.name;
    const pet = petData.find(pet => pet.name === name);
    res.send(`Konichiwa ${name}`)
});







app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}`);
});
