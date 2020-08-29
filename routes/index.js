const {Router} = require('express');
const lampka = require('./lampka');
const router = Router();
router.use('/lampka', lampka);
module.exports = router;