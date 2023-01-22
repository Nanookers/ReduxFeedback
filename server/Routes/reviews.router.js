const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "feedback" 
                        ORDER BY "id";`;
    pool.query(queryText).then(result => { 
      res.send(result.rows);
    })
    .catch(error => {
      console.log('error getting books', error);
      res.sendStatus(500);
    });
  });


router.post('/',  (req, res) => {
    let newReview = req.body;
    console.log(req.body);
    let sqlQuery = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                     VALUES ($1, $2, $3, $4);`;
    
    let sqlValues = [Number(newReview.feeling), Number(newReview.understanding), Number(newReview.support), newReview.comments];
    pool.query(sqlQuery, sqlValues)
      .then(result => {
        res.sendStatus(201);
      })
      .catch(error => {
        console.log(`Error adding review`, error);
        res.sendStatus(500);
      });
  });

module.exports = router;