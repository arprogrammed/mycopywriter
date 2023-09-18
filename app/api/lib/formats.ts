

export async function mform3(pSite: string, pTitle: string, pStyle: string, pColors: string, pBrand: string, pBSite: string, pCategory: string) {

    const mf3: string = `I need product romance copy for a product that I am selling on my ${pSite} website.`
    + ` The whole copy needs to be a total of three paragraphs with three sentences each paragraph.`
    + ` The first paragraph will be about a product called ${pTitle}, this product has ${pStyle} style with ${pColors} colors.`
    + ` The second paragraph will be about the products brand called ${pBrand} and you should use the brands website at ${pBSite} to write a brief summary about who they are as a company and do not link to or refer to their website.`
    + ` The last paragraph should close the sale by highlighting the best uses of the product.`
    + ` The overall "voice" or brand style of my website should be one that is focused around ${pCategory}.`
    + ` Write me the romance copy.`

    return mf3;
};

export async function mform2(pSite: string, pTitle: string, pStyle: string, pColors: string, pCategory: string) {

    const mf2: string = `I need product romance copy for a product that I am selling on my ${pSite} website.`
    + ` The whole copy needs to be a total of two paragraphs with three sentences each paragraph.`
    + ` The first paragraph will be about a product called ${pTitle} this product has ${pStyle} style with ${pColors} colors.`
    + ` The second paragraph should close the sale by highlighting the uses of the product.`
    + ` The overall "voice" or brand style of my website should be one that is focused around ${pCategory}.`

    return mf2;
}

export async function bform1(pSite: string, pBrand: string, pBSite: string, pCategory: string) {

    const bf1: string = `I need product romance copy for a product that I am selling on my ${pSite} website.`
    + ` The whole copy needs to be one paragraph with three sentences.`
    + ` The products brand is called ${pBrand} and you should use the brands website at ${pBSite} to write a brief summary about who they are as a company and do not link to or refer to their website.`
    + ` The overall "voice" or brand style of my website should be one that is focused around ${pCategory}.`

    return bf1;
}

