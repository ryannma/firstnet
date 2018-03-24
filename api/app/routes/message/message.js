const router = require('express').Router();
const { talk, processResponse } = require('@lib/watson');


function formatTexts(texts) {
  return texts.map(row => {
      return {
        text: row.message,
        time: row.createdAt,
        createdAt: new Date(row.createdAt).getTime(),
        user: {
          id: row.user_id,
          email: row.email
        },
        context: row.context
      }
    });
}

router.post('/', (req, res) => {

  // Input contents (need format)
  const text = req.body.text;
  const userId = req.body.userId;
  const context = req.body.context;

  const db = req.app.get('db');

  // Talk to watson
  talk(text, context, (err, response) => {
    const rv = processResponse(err, response);
    if (rv) {

      // Insert sent message
      const query = `INSERT INTO message (message, user_id, email, createdAt) 
       VALUES ('${text}', ${userId}, 'me@email.com', CURRENT_TIMESTAMP)`;
      db.execute(query,(err, results, fields) => {

        // Insert watson's response
        const query2 = `INSERT INTO message (message, user_id, email, createdAt, respond_id, context) 
         VALUES ('${rv.message}', 42, 'Watson Responder', CURRENT_TIMESTAMP+1, ${userId}, '${JSON.stringify(rv.context)}')`;
        db.execute(query2, (err, results, fields) => {

          // After watson's response is inserted, get new list
          const queryGET = `SELECT * FROM message WHERE user_id = ${userId} OR respond_id = ${userId}
                            ORDER BY createdAt DESC LIMIT 20`;
          db.query(queryGET, (err, results, fields) => {
            const formattedResults = formatTexts(results);
            res.status(200);
            res.json(formattedResults);
          });
        });
      })

      
    } else {
      res.status(200);
      res.json({
        messsage: 'Watson did not provide a response'
      });
    };
  });
});

router.get('/', (req, res) => {

  const db = req.app.get('db');
  const userId = req.query.userId;
  const queryGET = `SELECT * FROM message WHERE user_id = ${userId} OR respond_id = ${userId}
                    ORDER BY createdAt DESC LIMIT 20`;
  db.query(queryGET, (err, results, fields) => {
    const formattedResults = formatTexts(results);
    res.status(200);
    res.json(formattedResults);
  });
});

module.exports = router;
