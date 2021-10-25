const express = require('express');
const cors = require('cors');
const { addItems } = require('./commonFunctions');
const { BASKET_GOODS_PATH } = require('./constants');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('./static'));

app.patch('/api', (res, req) => {
    addItems(BASKET_GOODS_PATH, res.body).then((items) => {
        req.setHeader('Content-Type', 'application/json; charset=UTF-8')
        req.send(items)
    });
});

app.delete('/api', (res, req) => {
    deleteItem(BASKET_GOODS_PATH, res.body.id).then((items) => {
        req.setHeader('Content-Type', 'application/json; charset=UTF-8')
        req.send(items)
    });
});

app.listen('3000', () => {
    console.log('server is run!');
});