const router = require('express').Router();

router.get('/hi', (req, res) => {
  res.json({
    messsage: 'Hello World!'
  });
});

module.exports = router;
