import { encode } from 'gpt-3-encoder';


export async function toker(tokstring: string) {

    const tk = new Promise<string>((resolve, reject) => {
        const encoded = encode(tokstring);
        const length = encoded.length;
        resolve(length.toString().trim())
    });

    const tkc = await tk;
    return tkc;
};