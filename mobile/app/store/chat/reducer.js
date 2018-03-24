import * as types from './actionTypes'

const initialState = {
  sending: false,
  sendingError: null,
  message: '',
  messages: {},
  loadMessagesError: null,
  userId: Math.floor(Math.random() * 2147483647) + 1
}

const chat = (state = initialState, action) => {
  switch(action.type) {
    case types.CHAT_MESSAGE_LOADING:
      return { ...state, sending: true, sendingError: null }
      break;
    case types.CHAT_MESSAGE_ERROR:
      return { ...state, sending: false, sendingError: action.error }
      break;
    case types.CHAT_MESSAGE_SUCCESS:
      return { ...state, sending: false, sendingError: null, message: '' }
      break;
    case types.CHAT_MESSAGE_UPDATE:
      return { ...state, sending: false, message: action.text, sendingError: null }
      break;
    case types.CHAT_LOAD_MESSAGES_SUCCESS:
      return { ...state, messages: action.messages, loadMessagesError: null }
      break;
    case types.CHAT_LOAD_MESSAGES_ERROR:
      return { ...state, messages: null, loadMessagesError: action.error }
      break;
    default:
      return state
  }
}

export default chat