import Api from '../../api/Api';

const MessageService = {

    findAllMessages: () => { // return promise of array of messages
        return Api.messages.findAllMessages();
    },

    createMessage: ({userId, text}) => {
        return Api.messages.createMessage({id: userId, text });
    },

    subscribeToMessages: (onMessagesReceived) => {
        const subscription = setInterval(() => {
            MessageService.findAllMessages().then(messages => onMessagesReceived(messages)).catch(error => {
                console.error(error);
            })
        }, 1000);

        return subscription;
    },

    unsubscribeFromMessages: (subscription) => {
        clearInterval(subscription);
    }

};

export default MessageService;