<<<<<<< HEAD
import React from 'react';
import { Segment, Divider } from 'semantic-ui-react';
=======
import React from 'react'
import { Segment, Divider } from 'semantic-ui-react'
>>>>>>> chat update

const ChatMessage = ({ message }) => (
  <Segment>
    <i>{message.email}</i>
    <Divider hidden />
<<<<<<< HEAD
    <blockquote>{ message.body }</blockquote>
  </Segment>
)

export default ChatMessage;
=======
    <blockquote>{message.body}</blockquote>
  </Segment>
)

export default ChatMessage
>>>>>>> chat update
