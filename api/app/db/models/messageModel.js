const { Model } = require('objection');

class Message extends Model {
  static get tableName() {
    return 'message'
  }
}

const messageQueries = {

  insertMessage(message) {
    Message.query().insertAndFetch(message, )
  }
}

module.exports = { Message, messageQueries };
