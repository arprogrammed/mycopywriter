import { OpenAI } from 'openai';

export async function getResAI(model: string) {
    // Model to test temps and repetitions
    const para_model_tweaks = {
        messages: [{ role: 'system', content: `${model}` }],
        model: 'gpt-3.5-turbo',
        temperature: 1.3,
        max_tokens: 350,
        frequency_penalty: 0.88,
        presence_penalty: 0.5,
    }

    const brand_model_tweaks = {
        messages: [{ role: 'system', content: `${model}` }],
        model: 'gpt-3.5-turbo',
        temperature: 1.3,
        max_tokens: 90,
        frequency_penalty: 0.7,
        presence_penalty: 0.5,
    }

    const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY as string,
    organization: process.env.AI_ORG_ID as string
    });

    const params: OpenAI.Chat.CompletionCreateParams = {
        messages: [{ role: 'system', content: `${model}` }],
        model: 'gpt-3.5-turbo',
    };
    
    const gen = new Promise<string>((resolve, reject) => {
        openai.chat.completions.create(params)
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

