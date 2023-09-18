import { NextResponse } from 'next/server';
import { getCount } from '../../lib/tokenize';
import { getResAI } from '../../lib/aitouch';
import { mform2, mform3, bform1 } from '../../lib/formats';

export async function POST(req: Request) {

  try {
    // Inputs deconstruction and clean/validation
    const { formId, pSite, pTitle, pStyles, pColors, pBrand, pBSite, pCategory } = await req.json();
    const styles = {pStyles: pStyles.join(', ')};
    const colors = {pColors: pColors.join(', ')};
    const form = formId.id;

    let generatedData = '';
    switch (form) {
      case 'mform2':
        generatedData = await mform2(pSite, pTitle, styles.pStyles, colors.pColors, pCategory);
        break;
      case 'mform3':
        generatedData = await mform3(pSite, pTitle, styles.pStyles, colors.pColors, pBrand, pBSite, pCategory);
        break;
      case 'bform1':
        generatedData = await bform1(pSite, pBrand, pBSite, pCategory);
        break;
      default:
        NextResponse.json({ error: 'Error Generating Form Model' });
        break;
    };
    console.log(generatedData);

    let [tokenCtOut, myRes] = await Promise.allSettled([getCount(generatedData),getResAI(generatedData)]);
    console.log(tokenCtOut);

    if(myRes !== null) {
      return NextResponse.json({ myRes });
    } else {
      return NextResponse.json({ error: 'Error Generating Data' });
    };

  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' });
  }
};


