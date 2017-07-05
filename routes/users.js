const express = require('express');
const router = express.Router();

// url: /api/users/
router.get('/', (req, res) => {
    res.send('Kullanıcılar Listesi');
});

// url: /api/users/
router.post('/', (req, res) => {
    res.send('Kullanıcı Ekleme');
});

// url: /api/users/5
router.put('/:id', (req, res) => {
    // id = req.params.id
    res.send('Kullanıcı Güncelleme');
});

// url: /api/users/5
router.delete('/:id', (req, res) => {
    // id = req.params.id
    res.send('Kullanıcı Silme');
});

module.exports = router;