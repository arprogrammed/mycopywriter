import { NextResponse } from 'next/server';
import { stripe } from '@/app/api/lib/stripe';

export async function POST(req: Request, res: Response) {
    const { state } = await req.json();

    try{

        const session = await stripe.checkout.sessions.create({
            line_items: [
                {price: 'price_1NnmyWFhYCzdG6msVvrxTpLS', quantity: 1},
            ],
            mode: 'payment',
            success_url: `${process.env.AUTH0_ISSUER}/continue?state=${state}`,
            cancel_url: `${process.env.NEXTAUTH_URL}/?success=false`,
        });
        
        return NextResponse.json({url: `${session.url}`});
        
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Error completing checkout. Please contact support.' });
    };

};