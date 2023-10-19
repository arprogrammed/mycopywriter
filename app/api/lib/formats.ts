// This file contains the prompts merged with user inputs from the API backend received via fetch.
// Prompts below are exported to api modelp route.

export async function mform3(pSite: string, pTitle: string, pStyle: string, pColors: string, pBrand: string, pBSite: string, pSiteCategory: string) {

    const mf3: string = `I need product copy for a product that I am selling on my ${pSite} website.`
    + ` The whole copy should only be a total of three paragraphs with three sentences in each paragraph.`
    + ` The first paragraph will be about a product called ${pTitle}, this product has ${pStyle} style with ${pColors} colors.`
    + ` The second paragraph will be about the products brand called ${pBrand} and you should use the brands website at ${pBSite} to write a brief summary about who they are as a company and do not link to or refer to their website.`
    + ` The last paragraph should close the sale by highlighting the best uses of the product.`
    + ` The "voice" or style of my website should be one that is focused around ${pSiteCategory}.`

    return mf3;
};

export async function mform2(pSite: string, pTitle: string, pStyle: string, pColors: string, pSiteCategory: string) {

    const mf2: string = `I need product copy for a product that I am selling on my ${pSite} website.`
    + ` The whole copy should only be a total of two paragraphs with three sentences in each paragraph.`
    + ` The first paragraph will be about a product called ${pTitle} this product has ${pStyle} style with ${pColors} colors.`
    + ` The second paragraph should close the sale by highlighting the uses of the product.`
    + ` The "voice" or style of my website should be one that is focused around ${pSiteCategory}.`

    return mf2;
}

export async function bform1(pSite: string, pBrand: string, pBSite: string, pSiteCategory: string) {

    const bf1: string = `I need product copy for a product that I am selling on my ${pSite} website.`
    + ` The whole copy should only be one paragraph with three sentences.`
    + ` The products brand is called ${pBrand} and you should use the brands website at ${pBSite} to write a brief summary about who they are as a company and do not link to or refer to their website.`
    + ` The "voice" or style of my website should be one that is focused around ${pSiteCategory}.`

    return bf1;
}

export async function bform2(pSite: string, pBrand: string, pSiteCategory: string, pKeywords: string) {

    const bf2: string = `I need copy for my brand called ${pBrand} which is located at my website called ${pSite}.`
    + ` The whole copy should only be one paragraph with three sentences.`
    + ` The "voice" or style of my website should be one that is focused around ${pSiteCategory}.`
    + ` The copy should highlight the values of my website based on the content of my website, but should not link to my website.`
    + ` The copy should also use keywords ${pKeywords} in the copy.`

    return bf2;
}

