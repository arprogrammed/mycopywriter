import { OpenAI } from 'openai';
import { Completions } from 'openai/resources/chat/index.mjs';

export async function getResAI(model: string, form: string) {

    const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY as string,
    organization: process.env.AI_ORG_ID as string
    });

    // Below is for Brand Paragraph
    const params_1: OpenAI.Chat.CompletionCreateParams = {
        messages: [{ role: 'system', content: `${model}` }],
        model: 'gpt-3.5-turbo',
        temperature: 1.3,
        max_tokens: 90,
        frequency_penalty: 0.7,
        presence_penalty: 0.5,
    };

    // Below is for Product Copy Paragraphs 2
    const params_2: OpenAI.Chat.CompletionCreateParams = {
        messages: [{ role: 'system', content: `${model}` }],
        model: 'gpt-3.5-turbo',
        temperature: 1.3,
        max_tokens: 200,
        frequency_penalty: 0.88,
        presence_penalty: 0.5,
    };

    // Below is for Product Copy Paragraphs 3
    const params_3: OpenAI.Chat.CompletionCreateParams = {
        messages: [{ role: 'system', content: `${model}` }],
        model: 'gpt-3.5-turbo',
        temperature: 1.3,
        max_tokens: 350,
        frequency_penalty: 0.88,
        presence_penalty: 0.5,
    };

    let setParams: any;
    if (form == 'bform1') {
        setParams = params_1;
        console.log('BForm used.');
    } else if (form == 'mform2') {
        setParams = params_2;
        console.log('MForm2 used.');
    } else {
        setParams = params_3;
        console.log('MForm3 used.');
    }
    
    const gen = new Promise<string>((resolve, reject) => {
        openai.chat.completions.create(setParams)
        .then((d: OpenAI.Chat.Completions.ChatCompletion) => { 
            const res: string = `${d.choices[0].message.content}`;
            resolve(res)
        })
        .catch((err) => {
            if (err instanceof OpenAI.APIError) {
              console.log(err.status); // 400
              console.log(err.name); // BadRequestError
              console.log(err.headers); // {server: 'nginx', ...}
            } else {
              reject(err);
            }
        });
    });

    const result: string = await gen;
    return result;
};

