import axios from 'axios';

export async function translationRequest(word: string) {
        const messages = [
                {
                        "role": "developer",
                        "content": `I want you to write a sentence in arabic with the following word.
                                Make the sentence about 10-30 words.
                                Just give the sentence and do not say things like here is the sentence, please translate, etc.`
                },
                {
                        "role": "user",
                        "content": word
                }
        ]
        return gptRequest(messages)

}

export async function productionRequest(word: string) {
        const messages = [
                {
                        "role": "developer",
                        "content": `I want you to write a sentence in english with the following word.
                                Make the sentence about 10-30 words.
                                Use the word in english, do not use the arabic version of the word.
                                Just give the sentence and do not say things like here is the sentence, please translate, etc.`
                },
                {
                        "role": "user",
                        "content": word
                }
        ]
        return gptRequest(messages);
}

export async function gptRequest(messages: Record<string, string>[]) {
        const apiKey = process.env.OPENAI_API_KEY;

        if (!apiKey) {
                console.error('API key is missing! Please set OPENAI_API_KEY in your .env file.');
                return;
        }

        const url = 'https://api.openai.com/v1/chat/completions';

        const data = {
                model: 'gpt-4o-mini',
                messages: messages,
                temperature: 0.7,
        };

        const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
        };

        const response = await axios.post(url, data, { headers });
        return response.data
}
