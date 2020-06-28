
const MessageRoster = (() => {
    var messages = [];

    const addMessage = (user, content) => {
        var message = MessageFactory(user,content, new Date());
	messages.push(message);
    }

    const getMessages = () => { return messages };

    return {addMessage, getMessages};
})();

const MessageFactory = (user, content, date) => {
    return {user,content,date};
}

exports.MessageRoster = MessageRoster;
