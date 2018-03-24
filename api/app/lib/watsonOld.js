// Example 1: sets up service wrapper, sends initial message, and 
// receives response.

var ConversationV1 = require('watson-developer-cloud/conversation/v1');

// Set up Conversation service wrapper.
var conversation = new ConversationV1({
  username: '915638ae-6ff1-4bc2-ab64-7523cd7428fa', // replace with service username
  password: 'cCdH4OmsZuLU', // replace with service password
  version_date: '2017-05-26'
});

var workspace_id = '6ae45b07-8c5b-43f0-9678-1bae3d17f59c'; // replace with workspace ID

// Start conversation with empty message.
conversation.message({
  workspace_id: workspace_id
  }, processResponse);

// Process the conversation response.
function processResponse(err, response) {
  if (err) {
    console.error(err); // something went wrong
    return;
  }

  var endConversation = false;

  // Check for action flags.
  if (response.output.action === 'display_time') {

    // User asked what time it is, so we output the local system time.
    console.log('The current time is ' + new Date().toLocaleTimeString());
  } else if (response.output.action === 'end_conversation') {

    // User said goodbye, so we're done.
    console.log(response.output.text[0]);
    endConversation = true;
  } else {

    // Display the output from dialog, if any.
    if (response.output.text.length != 0) {
        console.log(response.output.text[0]);
    }
  }

  // If we're not done, prompt for the next round of input.
  if (!endConversation) {
    var newMessageFromUser = prompt('>> ');
    conversation.message({
      workspace_id: workspace_id,
      input: { text: newMessageFromUser },
      context : response.context, // Send back the context to maintain state.
    }, processResponse)
  }
}