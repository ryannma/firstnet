const router = require('express').Router();
const { talk, processResponse } = require('@lib/watson');


router.post('/', (req, res) => {

  // Input contents (need format)
  const text = req.body.text;
  const context = req.body.context;

  // Talk to watson
  talk(text, context, (err, response) => {
    const rv = processResponse(err, response);
    if (rv) {
      res.status(200);
      res.json(rv);
    } else {
      res.status(200);
      res.json({
        messsage: 'Watson did not provide a response'
      });
    };
  });
});

module.exports = router;
