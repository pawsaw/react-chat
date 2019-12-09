import React from 'react';
import MessageShape from '../../shapes/MessageShape';
import PropTypes from 'prop-types';
import ChatOutputMessage from './ChatOutputMessage/ChatOutputMessage';

const ChatOutput = ({ messages }) => {

    return (
        <div className="chat-output">
            {messages.map(message => (
                <ChatOutputMessage key={message.id} message={message} />
            ))}
        </div>
    );
};

ChatOutput.propTypes = {
    messages: PropTypes.arrayOf(MessageShape)
};

ChatOutput.defaultProps = {
    messages: []
}

export default ChatOutput;