'use client'
import { useSession } from 'next-auth/react';
import styles from '@/app/components/ModelForms/component.module.css';
import React, { useState } from 'react';
import AIGen from '@/app/components/GeneratedAIResp/respy';
import Loading from '@/app/loading';

export default function Brand1(){ 
    const { data: session } = useSession();
    const formId = {id: 'bform1'};
    const [isLoading, setLoad] = useState(false);
    const [aigene, setAigene] = useState('Your response will appear here...');
    const [pSite, setpSite] = useState('');
    const [pBrand, setpBrand] = useState('');
    const [pBSite, setpBSite] = useState('');
    const [pSiteCategory, setpSiteCategory] = useState('');

    // onClick function for API to generate copy
    const handleGenerate = async () => {

        // try/catch to make the API call
        try {
            setLoad(true);
            // useState values cleaning for pass to API
            
            // API call to AI
            const response = await fetch('/api/ai/modelp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                formId,
                pSite,
                pBrand,
                pBSite,
                pSiteCategory
                // Pass other inputs in the object as needed
            }),
            });

            // Logic to catch the resp error
            if (response.ok) {
                const { myRes } = await response.json();
                // Handle the data from the API response if needed
                console.log(myRes);
                setAigene(`${myRes}`);
                setLoad(false);

            } else {
                // Catch for an error in a response
                console.error(`Error generating data:`, response.statusText);
                setLoad(false);
            }
            
        } catch (error) {
            // Catch for failure in the API call
            console.error(`Error generating data:`, error);
            setLoad(false);
        };

    };

    if (session) {
        return (
            <main className={styles.form_main}>
                <h2>Brand Paragraph For Third-Party</h2>
                <p>This form can be used to write a brand summary paragraph for a third-party brand.</p>
                <form>
                    <label>Your Website
                        <input
                        type="text"
                        value={pSite}
                        onChange={(e) => setpSite(e.target.value)}
                        placeholder='example.com'
                        />
                    </label>
                    <label>Product Brand
                        <input
                        type="text"
                        value={pBrand}
                        onChange={(e) => setpBrand(e.target.value)}
                        placeholder='Brand Name'
                        />
                    </label>
                    <label>Product Brand&#39;s Website
                        <input
                        type="text"
                        value={pBSite}
                        onChange={(e) => setpBSite(e.target.value)}
                        placeholder='brandname.com'
                        />
                    </label>
                    <label>Website Product Category
                        <input
                        type="text"
                        value={pSiteCategory}
                        onChange={(e) => setSiteCategory(e.target.value)}
                        placeholder='website product category'
                        />
                    </label>
                    <button type="button" onClick={handleGenerate}>
                        Write My Copy!
                    </button>
                </form>
                { isLoading ? (<Loading />) : (<AIGen respy={aigene} />)}
            </main>
        );
    } else {
        return (
            <main className={styles.form_main}>
                <div>
                    <p>Please login again to view this AI form.</p>
                </div>
            </main>
        );
    }
}