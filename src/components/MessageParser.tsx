



class MessageParser {
    constructor(private actionProvider: MessageParserProps["actionProvider"]) {}

    parse(message: string) {
        console.log('recipe', message);
        if (message.includes('recipe')) {
            this.actionProvider.handleReciperequest();
        }

        }
}

export default MessageParser;