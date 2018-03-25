const router = require('express').Router();

router.get('/hi', (req, res) => {
  res.json({
    messsage: 'Hello World!'
  });
});

router.use('/message', require('@routes/message/message'));

router.use('/sms', require('@routes/sms/sms'));

module.exports = router;
