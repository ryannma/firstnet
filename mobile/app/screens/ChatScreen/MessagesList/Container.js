import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { loadMessages } from '../../../store/chat/actions'
import { getChatItems } from '../../../store/chat/selectors'

import MessageListComponent from './Component'

class MessagesListContainer extends Component {

  componentDidMount() {
    this.props.loadMessages(this.props.userId);
  }

  render() {
    const data = getChatItems(this.props.messages);
    return (
      <MessageListComponent
        data={data} />
    )
  }
}

const mapStateToProps = state => ({
  messages: state.messages,
  error: state.loadMessagesError,
  userId: state.userId
})

const mapDispatchToProps = {
  loadMessages
}

MessagesListContainer.propTypes = {
  error: PropTypes.string,
  loadMessages: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesListContainer)