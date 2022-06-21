import  Express  from "express";

const app = Express()

app.use('/finances')

app.get('/finances', function (req, res) {
    res.send('CHAMAAAA')
})