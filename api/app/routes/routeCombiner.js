const router = require('express').Router();

router.get('/hi', (req, res) => {
  res.json({
    messsage: 'Hello World!'
  });
});

router.use('/message', require('@routes/message/message'));

module.exports = router;
