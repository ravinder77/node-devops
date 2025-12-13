import express from 'express';

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello guys! lets learn how it works');
})

app.get('/health', (req, res) => {
    res.send({
        status: 'OK',
    });
})

app.listen(3000, () => console.log(' app listening on port 3000'));