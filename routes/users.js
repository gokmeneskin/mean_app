const express = require('express');
const router = express.Router();

const User = require('../models/user');

// url: /api/users/
router.get('/', (req, res) => {
    User.getUsers((err, users) => {
        res.json(users);
    });
});

router.get('/:id', (req, res) => {
    User.getUser(req.params.id, (err, user) => {
        res.json(user);
    });
});

// url: /api/users/
router.post('/', (req, res) => {
    let newUser = new User({
        username: req.body.username,
        password: req.body.password
    });
    User.addUser(newUser, (err, user) => {
        if(err) {
            res.json({
                success: false,
                msg: 'Kullanıcı kaydı yapılırken hata ile karşılaşıldı',
                error: err
            });
        } else {
            res.json({
                success: true,
                msg: 'Kullanıcı kaydedildi',
                data: user
            });
        }
    });
});

// url: /api/users/5
router.put('/:id', (req, res) => {
    let newUser = {
        username: req.body.username,
        password: req.body.password
    };
    User.updateUser(req.params.id, newUser, (err, user) => {
        if(err) {
            res.json({
                success: false,
                msg: 'Kullanıcı güncellenirken hata ile karşılaşıldı',
                error: err
            });
        } else {
            res.json({
                success: true,
                msg: 'Kullanıcı güncellendi',
                data: newUser
            });
        }
    });

});

// url: /api/users/5
router.delete('/:id', (req, res) => {
    User.deleteUser(req.params.id, (err, user) => {
        if(err) {
            res.json({
                success: false,
                msg: 'Kullanıcı silinirken hata ile karşılaşıldı',
                error: err
            });
        } else {
            res.json({
                success: true,
                msg: 'Kullanıcı başarılı bir şekilde silindi'
            });
        }
    });
});

module.exports = router;