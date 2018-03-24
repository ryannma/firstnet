const router = require('express').Router();
const { talk, processResponse } = require('@lib/watson');


router.post('/', (req, res) => {

  // Input contents (need format)
  const text = req.body.text;
  const context = req.body.context;

  const db = req.app.get('db');
  const query = `INSERT INTO message (message, user_id, email, createdAt) 
     VALUES ('${text}', 123, 'me@email.com', CURRENT_TIMESTAMP)`;
  db.execute( query,
    (err, results, fields) => {
    }
  )

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
