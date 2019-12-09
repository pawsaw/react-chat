import React from 'react';
import MessageShape from '../../../shapes/MessageShape';

const ChatOutputMessage = ({ message }) => {

    const { id, userId, text } = message;

    return (
        <div>
            {id}: {userId}: {text}
        </div>
    );
};

ChatOutputMessage.propTypes = {
    message: MessageShape
};

export default ChatOutputMessage;