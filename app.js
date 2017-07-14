const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/mean_app', { useMongoClient: true});
mongoose.connection.on('connected', () => {
    console.log('Database bağlantısı başarılı bir şekild yapıldı');
});
mongoose.connection.on('error', (err) => {
    console.log("Database'e bağlanılırken hata ile karşılaşıldı, hata: " + err);
});

const app = express();

// Heroku için process.env.port gerekir
const port = process.env.port || 3000;

app.use(bodyParser.json());

const users = require('./routes/users');
app.use('/api/users', users);

app.get('/', (req, res) => {
    res.send('Anasayfa'); 
});

// String birleştirme
app.listen(port, () => {
    console.log('Server ' + port + ' portu üzerinden başlatıldı');
});

