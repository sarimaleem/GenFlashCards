import axios from 'axios';

export async function evaluateTranslation(word: string, question: string, answer: string) {
        const messages = [
                {
                        "role": "developer",
                        "content": `
                        I want you to evaluate the following answer based on the following prompt. the prompt is to translate the statement into english.
                        I want you to give me the result in json only, with no extraneous phrases like here is your answer.
                        The prompt is based on a specific vocab word, which is given. place special emphasis on whether they use the word correctly.
                        `
                },
                {
                        "role": "user",
                        "content": `vocab word: ${word}`
                },
                {
                        "role": "user",
                        "content": `prompt: ${question}`
                },
                {
                        "role": "user",
                        "content": `answer: ${answer}`
                }
        ]
        const response_format = {
                // See /docs/guides/structured-outputs
                type: "json_schema",
                json_schema: {
                        name: "response_schema",
                        schema: {
                                type: "object",
                                properties: {
                                        evaluation: {
                                                description: "evaluation is a number from 1-3, 1 being very incorrect, 2 being somewhat correct, and 3 being mostly correct",
                                                type: "number"
                                        },
                                        answer: {
                                                description: "the actual answer, the translation of the prompt",
                                                type: "string"
                                        },
                                        feedback: {
                                                description: "feedback on how they were right or wrong",
                                                type: "string"
                                        }

                                },
                                additionalProperties: false
                        }
                }
        }
        return gptRequest(messages, response_format)
}

export async function evaluateProduction(word: string, question: string, answer: string) {
        const messages = [
                {
                        "role": "developer",
                        "content": `
                        I want you to evaluate the following answer based on the following prompt. the prompt is to translate the statement into arabic.
                        I want you to give me the result in json only, with no extraneous phrases like here is your answer.
                        The json should be formatted in the following way:
                        {evaluation: number, feedback: string}, where evaluation is a number from 1-3, 1 being very incorrect, 2 being somewhat correct, and 3 being mostly correct
                        the feedback should indicate how they were right or wrong.
                        The prompt is based on a specific vocab word, which is given. place special emphasis on whether they use the word correctly
                        `
                },
                {
                        "role": "user",
                        "content": `vocab word: ${word}`
                },
                {
                        "role": "user",
                        "content": `prompt: ${question}`
                },
                {
                        "role": "user",
                        "content": `answer: ${answer}`
                }
        ]
}

export async function translationRequest(word: string) {
        const messages = [
                {
                        "role": "developer",
                        "content": `I want you to write a sentence in arabic with the following word.
                                Make the sentence about 5-10 words.
                                This is for a language learning app, so don't make the vocab too complicated.
                                Just give the sentence and do not say things like here is the sentence, please translate, etc.`
                },
                {
                        "role": "user",
                        "content": word
                }
        ]
        return gptRequest(messages, null)

}

export async function productionRequest(word: string) {
        const messages = [
                {
                        "role": "developer",
                        "content": `I want you to write a sentence in english with the following word.
                                Make the sentence about 10-30 words.
                                Use the word in english, do not use the arabic version of the word.
                                This is for a language learning app, so don't make the vocab too complicated.
                                Just give the sentence and do not say things like here is the sentence, please translate, etc.`
                },
                {
                        "role": "user",
                        "content": word
                }
        ]
        return gptRequest(messages, null);
}

export async function gptRequest(messages: Record<string, string>[], response_format: null | Record<string, string>) {
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
                response_format,
        };

        const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
        };

        const response = await axios.post(url, data, { headers });
        return response.data
}
