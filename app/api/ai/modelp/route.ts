import { NextResponse } from 'next/server';
import { getResAI } from '../../lib/aitouch';
import { mform2, mform3, bform1 } from '../../lib/formats';

export async function POST(req: Request) {
  try {
    const resp = await req.json();
    const form = resp.formId.id;

    if (form == 'mform2') {
      try {
        const { pSite, pTitle, pStyles, pColors, pSiteCategory } = resp;
        const styles = {pStyles: pStyles.join(', ')};
        const colors = {pColors: pColors.join(', ')};

        const generatedData = await mform2(pSite, pTitle, styles.pStyles, colors.pColors, pSiteCategory);

        let myRes = await Promise.resolve(getResAI(generatedData, form));

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
        const { pSite, pTitle, pStyles, pColors, pBrand, pBSite, pSiteCategory } = resp;
        const styles = {pStyles: pStyles.join(', ')};
        const colors = {pColors: pColors.join(', ')};

        const generatedData = await mform3(pSite, pTitle, styles.pStyles, colors.pColors, pBrand, pBSite, pSiteCategory);

        let myRes = await Promise.resolve(getResAI(generatedData, form));

        if(myRes !== null) {
          return NextResponse.json({ myRes });
        } else {
          return NextResponse.json({ error: 'Error Generating MForm3 Response' });
        };

      } catch (err) {
        NextResponse.json({ error: 'Error, Try Block, API MForm3',  err });
      };
    } else {
      try {
        const { pSite, pBrand, pBSite, pSiteCategory } = resp;

        const generatedData = await bform1(pSite, pBrand, pBSite, pSiteCategory);

        let myRes = await Promise.resolve(getResAI(generatedData, form));

        if(myRes !== null) {
          return NextResponse.json({ myRes });
        } else {
          return NextResponse.json({ error: 'Error Generating BForm Response' });
        };

      } catch (err) {
        NextResponse.json({ error: 'Error, Try Block, API BForm',  err });
      };
    };
  } catch (err) {
    NextResponse.json({ error: 'Error, Try Block, API POST Func',  err });
  };
};



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


