import * as types from './actionTypes'
// import firebaseService from '../../services/firebase'

// const FIREBASE_REF_MESSAGES = firebaseService.database().ref('Messages')
// const FIREBASE_REF_MESSAGES_LIMIT = 20

export const sendMessage = message => {
  return (dispatch) => {
    dispatch(chatMessageLoading());

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