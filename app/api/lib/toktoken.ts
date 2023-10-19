import { encode } from 'gpt-3-encoder';

// This is the more native form of tokenization using the older endcoder from NPM.
// EDIT: opted not to use since not compatible with future GPT4 at time of coding.
export async function toker(tokstring: string) {

    const tk = new Promise<string>((resolve, reject) => {
        const encoded = encode(tokstring);
        const length = encoded.length;
        resolve(length.toString().trim())
    });

    const tkc = await tk;
    return tkc;
};