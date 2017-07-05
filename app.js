const express = require('express');
const users = require('./routes/users');

const app = express();
const port = process.env.port || 3000;

app.use('/api/users', users);

app.get('/', (req, res) => {
    res.send('Anasayfa'); 
});

app.listen(port, () => {
    console.log('Server 3000 portu üzerinden başlatıldı');
});

