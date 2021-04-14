const router = require('express').Router();

const mainController = require('../controllers/mainController');

router.post('/login', mainController.login);
router.get('/auditorio', mainController.auditorio);

router.get('/logout', function(req, res) {
    req.session.destroy((err) => {
        if(err) {
            return console.log(err);
        }
        res.redirect('/');
    });
});

router.get('/', function(req, res) {
    res.render('home',{
        denied: false
      });
});

module.exports = router;
