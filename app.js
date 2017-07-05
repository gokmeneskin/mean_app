const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Anasayfa'); 
});

app.get('/api', (req, res) => {
    res.send('Api sayfası');
});

app.get('/api/users', (req, res) => {
    res.send('Api Kullanıcılar Listesi');
});

app.listen(3000, () => {
    console.log('Server 3000 portu üzerinden başlatıldı');
});

