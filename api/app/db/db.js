const Knex = require('knex');
const { Model } = require('objection');
const { messageQueries } = require('@db/models/messageModel');

class db {
  constructor () {
    this.db = Knex({
      client: 'mysql2',
      connection: {
        host: 'firstnethackathon.cfsyj9wzhife.us-east-1.rds.amazonaws.com',
        user: 'root',
        password: 'password',
        database: 'master'
      }
    });
  };

  Model.knex(this.db);

  end() {
    this.db.destroy();
    delete this.db;
  };
}

Object.assign(db.prototype, messageQueries);

module.exports = db;
