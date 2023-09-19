export async function getCount2(text: string) {

    const tkc = new Promise<string>((resolve, reject) => {
        const getCounty = async (text1: string) => {
            const encoding = { encoding: "cl100k_base" };

            const tokcount = await fetch("/api/tokenizer", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    text1,
                    encoding
                }),
            });

            const { result2 } = await tokcount.json();
            return result2
        };

        resolve(getCounty(text))
    });
  
    const tk: string = await tkc;
    return tk;
};