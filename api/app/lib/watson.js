// Example 1: sets up service wrapper, sends initial message, and 
// receives response.

const ConversationV1 = require('watson-developer-cloud/conversation/v1');

// Set up Conversation service wrapper.
const conversation = new ConversationV1({
  username: '915638ae-6ff1-4bc2-ab64-7523cd7428fa', // replace with service username
  password: 'cCdH4OmsZuLU', // replace with service password
  version_date: '2017-05-26'
});

const workspace_id = '6ae45b07-8c5b-43f0-9678-1bae3d17f59c'; // replace with workspace ID

// Used to send messages into watson chat
// Context is an optional parameter, used if continuing a conversation
function talk(text, context, callback) {
  if (context !== null) {
    conversation.message({
      workspace_id: workspace_id,
      input: { text: text},
      context: context
    }, callback );
  } else {
    conversation.message({
      workspace_id: workspace_id,
      input: { text: text}
    }, callback);
  }
};

// Process the conversation response
function processResponse(err, response) {

  // Handle errors (output to console log for cloudwatch logs)
  if (err) {
    console.error(err); // something went wrong
    return;
  }

  // Track conversation ending actions
  var endConversation = false;

  // Check for action flags
  if (response.output.action === 'end_conversation') {

    // User said goodbye, so we're done
    console.log(response.output.text[0]);
    endConversation = true;
  } else {

    // Display the output from dialog, if any.
    if (response.output.text.length != 0) {
      return formatResponse(response);
    }
  }
};

// Format the message and return it
// Want to separate the format so that it is in a centralized position
function formatResponse(response) {
  return { 
    message: response.output.text[0],
    action: response.output.action,
    raw: response,
    context: response.context
  };
}

const talkPromise = (text, context) => new Promise(resolve => {
  talk(text, context);
});

module.exports = {
  talk: talk,
  processResponse: processResponse
}
