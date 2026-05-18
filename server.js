const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/saudacao', (req, res) => {

    const nome = req.body.nome;

    res.json({
        mensagem: `Olá, ${nome}! Seja bem-vindo ao projeto Full Stack.`
    });

});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});