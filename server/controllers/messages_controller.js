let messages = [];
let id = 0;


const createMessage = (req, res) => {
    const {text, time} = req.body;
    messages.push({
        id, 
        text, 
        time
    });
    id++;

    res.json(messages)
}


const readMessage = (req, res) => {
    res.json(messages)
}

const updateMessage = (req, res) => {
    const { text } = req.body;
    const messageIndex = messages.findIndex(message => message.id == req.params.id);
    messages[messageIndex] = {
        id: message.id,
        text: text || message.text,
        time: message.time
    };
    res.json(messages);
}

const deleteMessage = (req, res) => {
    const deleteID = req.params.id;
    const messageIndex = messages.findIndex(message => message.id == deleteID);
    messages.splice(messageIndex, 1);
    res.json(messages);
}

module.exports = {
    createMessage: createMessage,
    readMessage: readMessage,
    updateMessage: updateMessage,
    deleteMessage: deleteMessage
};
