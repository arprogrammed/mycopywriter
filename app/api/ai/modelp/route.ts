import { NextResponse } from 'next/server';
import { getResAI } from '../../lib/aitouch';
import { mform2, mform3, bform1 } from '../../lib/formats';

// Primary API route for formatting inputs into prompt passed to OpenAI, then resp passed to user.
export async function POST(req: Request) {
  try {
    // I use a formId located on each jsx form for logic in toggling prompt formats.
    const resp = await req.json();
    const form = resp.formId.id;

    if (form == 'mform2') {
      try {
        // mform2 or Model Form 2 Paragrpah deconstruct
        const { pSite, pTitle, pStyles, pColors, pSiteCategory } = resp;
        const styles = {pStyles: pStyles.join(', ')};
        const colors = {pColors: pColors.join(', ')};

        // form format via async imported function
        const generatedData = await mform2(pSite, pTitle, styles.pStyles, colors.pColors, pSiteCategory);

        // async call to openai
        let myRes = await Promise.resolve(getResAI(generatedData, form));

        // pass resp or err back to frontend
        if(myRes !== null) {
          return NextResponse.json({ myRes });
        } else {
          return NextResponse.json({ error: 'Error Generating MForm2 Response' });
        };

      } catch (err) {
        NextResponse.json({ error: 'Error, Try Block, API MForm2',  err });
      };
    } else if (form == 'mform3') {
      try {
        // mform3 or Model Form 3 Paragrpah deconstruct
        const { pSite, pTitle, pStyles, pColors, pBrand, pBSite, pSiteCategory } = resp;
        const styles = {pStyles: pStyles.join(', ')};
        const colors = {pColors: pColors.join(', ')};
        
        // form format via async imported function
        const generatedData = await mform3(pSite, pTitle, styles.pStyles, colors.pColors, pBrand, pBSite, pSiteCategory);

        // async call to openai
        let myRes = await Promise.resolve(getResAI(generatedData, form));

        // pass resp or err back to frontend
        if(myRes !== null) {
          return NextResponse.json({ myRes });
        } else {
          return NextResponse.json({ error: 'Error Generating MForm3 Response' });
        };

      } catch (err) {
        NextResponse.json({ error: 'Error, Try Block, API MForm3',  err });
      };
    } else if (form == 'bform1') {
      try {
        // bform1 or Brand Form 1 Paragrpah deconstruct
        const { pSite, pBrand, pBSite, pSiteCategory } = resp;

        // form format via async imported function
        const generatedData = await bform1(pSite, pBrand, pBSite, pSiteCategory);

        // async call to openai
        let myRes = await Promise.resolve(getResAI(generatedData, form));

        // pass resp or err back to frontend
        if(myRes !== null) {
          return NextResponse.json({ myRes });
        } else {
          return NextResponse.json({ error: 'Error Generating BForm Response' });
        };

      } catch (err) {
        NextResponse.json({ error: 'Error, Try Block, API BForm',  err });
      };
    } else {
      try {
        // bform2 or Brand Form 2 Paragrpah deconstruct
        const { pSite, pBrand, pSiteCategory, pKeywords } = resp;
        const keywords = {pKeywords: pKeywords.join(', ')};

        // form format via async imported function
        const generatedData = await bform1(pSite, pBrand, pSiteCategory, keywords.pKeywords);

        // async call to openai
        let myRes = await Promise.resolve(getResAI(generatedData, form));

        // pass resp or err back to frontend
        if(myRes !== null) {
          return NextResponse.json({ myRes });
        } else {
          return NextResponse.json({ error: 'Error Generating BForm2 Response' });
        };

      } catch (err) {
        NextResponse.json({ error: 'Error, Try Block, API BForm2',  err });
      };
    }
  } catch (err) {
    NextResponse.json({ error: 'Error, Try Block, API POST Func',  err });
  };
};


  // I had attempted the below switch logic but the gotcha in non-exiting properties of json made this unusable.
  
  // Inputs deconstruction and clean/validation
  //   const { pSite, pTitle, pStyles, pColors, pBrand, pBSite, pCategory } = await req.json() || {};
  //   const styles = {pStyles: pStyles.join(', ')};
  //   const colors = {pColors: pColors.join(', ')};

  //   let generatedData = '';
  //   switch (form) {
  //     case 'mform2':
  //       generatedData = await mform2(pSite, pTitle, styles.pStyles, colors.pColors, pCategory);
  //       break;
  //     case 'mform3':
  //       generatedData = await mform3(pSite, pTitle, styles.pStyles, colors.pColors, pBrand, pBSite, pCategory);
  //       break;
  //     case 'bform1':
  //       generatedData = await bform1(pSite, pBrand, pBSite, pCategory);
  //       break;
  //     default:
  //       NextResponse.json({ error: 'Error Generating Form Model' });
  //       break;
  //   };

  //   let myRes = await Promise.resolve(getResAI(generatedData));

  //   if(myRes !== null) {
  //     return NextResponse.json({ myRes });
  //   } else {
  //     return NextResponse.json({ error: 'Error Generating Data' });
  //   };

  // } catch (err) {
  //   return NextResponse.json({ error: 'Internal Server Error', err });
  // }


