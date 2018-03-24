import * as types from './actionTypes'
// import firebaseService from '../../services/firebase'

// const FIREBASE_REF_MESSAGES = firebaseService.database().ref('Messages')
// const FIREBASE_REF_MESSAGES_LIMIT = 20

// Remove stubs to implement API flow
// const createdAt = new Date().getTime();
// const chat1 = {
//   text: 'message 1 from user',
//   time: '1',
//   createdAt: createdAt,
//   user: {
//     id: '123',
//     email: 'me@email.com'
//   }
// }
// const chat2 = {
//   text: 'message 2 from server',
//   time: '2',
//   createdAt: createdAt,
//   user: {
//     id: '234',
//     email: 'not_me@email.com'
//   }
// }
// const messages = [chat1, chat2];

export const sendMessage = message => {
  return (dispatch) => {
    dispatch(chatMessageLoading())

    // Removed stubs to implement API
    // let currentUser = {
    //   id: '123',
    //   email: 'me@email.com'
    // }
    // let createdAt = new Date().getTime()
    // let chatMessage = {
    //   text: message,
    //   time: '2',
    //   createdAt: createdAt,
    //   user: {
    //     id: currentUser.id,
    //     email: currentUser.email
    //   }
    // }
    let chatMessage = {
      text: message
    };

    // Original code
    // FIREBASE_REF_MESSAGES.push().set(chatMessage, (error) => {
    //   if (error) {
    //     dispatch(chatMessageError(error.message))
    //   } else {
    //     dispatch(chatMessageSuccess())
    //   }
    // })

    // Remove stubs to implement API flow
    // messages.push(chatMessage);
    // dispatch(chatMessageSuccess())
    // dispatch(loadMessages())

    // Sending to API
    fetch('https://hjt3tuayp1.execute-api.us-east-1.amazonaws.com/prod/message', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(chatMessage),
    }).then((response) => {
      return response.json();
    }).then((json) => {
      dispatch(chatMessageSuccess());
      dispatch(loadMessagesSuccess(json));
    });
  }
}

export const updateMessage = text => {
  return (dispatch) => {
    dispatch(chatUpdateMessage(text))
  }
}

export const loadMessages = () => {

  // Original API
  // return (dispatch) => {
  //   FIREBASE_REF_MESSAGES.limitToLast(FIREBASE_REF_MESSAGES_LIMIT).on('value', (snapshot) => {
  //     dispatch(loadMessagesSuccess(snapshot.val()))
  //   }, (errorObject) => {
  //     dispatch(loadMessagesError(errorObject.message))
  //   })
  // }

  // Remove stubs to implement API flow
  // return (dispatch) => {
  //   dispatch(loadMessagesSuccess(messages));
  // }
  return (dispatch) => {
    fetch('https://hjt3tuayp1.execute-api.us-east-1.amazonaws.com/prod/message', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    }).then((response) => {
      return response.json();
    }).then((json) => {
      dispatch(loadMessagesSuccess(json));
    });
  }
}

const chatMessageLoading = () => ({
  type: types.CHAT_MESSAGE_LOADING
})

const chatMessageSuccess = () => ({
  type: types.CHAT_MESSAGE_SUCCESS
})

const chatMessageError = error => ({
  type: types.CHAT_MESSAGE_ERROR,
  error
})

const chatUpdateMessage = text => ({
  type: types.CHAT_MESSAGE_UPDATE,
  text
})

const loadMessagesSuccess = messages => ({
  type: types.CHAT_LOAD_MESSAGES_SUCCESS,
  messages
})

const loadMessagesError = error => ({
  type: types.CHAT_LOAD_MESSAGES_ERROR,
  error
})