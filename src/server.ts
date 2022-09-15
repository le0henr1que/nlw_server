import express from 'express';

const app = express();

app.get('/ads', (req, res) => {
    return res.json([
       'Ola'
    ])
})

app.listen(3333)