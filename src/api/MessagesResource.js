import { BASE_URL } from "./constants";

const RESOURCE = BASE_URL + 'messages/';

const MessagesResource = {
    
    findAllMessages: () => {
        return fetch(RESOURCE).then(response => response.json())
    },
    
    findMessage: (messageId) => {
        return fetch(RESOURCE + messageId).then(response => response.json())
    },
    
    createMessage: ({ id, userId, text }) => {
        return fetch(RESOURCE, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                id,
                userId,
                text
            })
        }).then(response => response.json());
    }
    
};

export default MessagesResource;