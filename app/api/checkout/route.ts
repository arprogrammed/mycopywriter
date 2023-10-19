import { NextResponse } from 'next/server';
import { stripe } from '@/app/api/lib/stripe';

// Callback route for Auth0 to use as a endpoint for paywall.
export async function POST(req: Request, res: Response) {
    const { state } = await req.json();

    try{
        // Cart session called and state passed in.
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {price: 'price_1NnmyWFhYCzdG6msVvrxTpLS', quantity: 1},
            ],
            mode: 'payment',
            success_url: `${process.env.AUTH0_ISSUER}/continue?state=${state}`,
            cancel_url: `${process.env.NEXTAUTH_URL}/?success=false`,
        });
        
        // State from Auth0 passed out from the urls above to complete Auth0 action.
        return NextResponse.json({url: `${session.url}`});
        
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Error completing checkout. Please contact support.' });
    };

};