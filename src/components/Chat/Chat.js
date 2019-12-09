import React, { useEffect, useState } from 'react';
import Domain from '../../domain/Domain';
import ChatOutput from './ChatOutput/ChatOutput';

const Chat = () => {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const subscription = Domain.messages.subscribeToMessages((messages) => {
            setMessages(messages);
        });
        return () => { // cleanup
            Domain.messages.unsubscribeFromMessages(subscription);
        };
    }, []);

    return (<div className="chat">
        <ChatOutput messages={messages} />
    </div>);

};

export default Chat;