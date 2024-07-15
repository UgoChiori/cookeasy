



class MessageParser {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(private actionProvider: any) {}

    parse(message: string) {
        console.log('recipe', message);
        if (message.includes('recipe')) {
            this.actionProvider.handleReciperequest();
        }

        }
}

export default MessageParser;