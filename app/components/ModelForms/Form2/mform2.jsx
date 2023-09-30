'use client'
import { useSession } from 'next-auth/react';
import styles from '@/app/components/ModelForms/component.module.css';
import React, { useState } from 'react';
import AIGen from '@/app/components/GeneratedAIResp/respy';
import Loading from '@/app/loading';

export default function Form2(){ 
    const { data: session } = useSession();
    const formId = {id: 'mform2'};
    const [isLoading, setLoad] = useState(false);
    const [aigene, setAigene] = useState('Your response will appear here...');
    const [pSite, setpSite] = useState('');
    const [pTitle, setpTitle] = useState('');
    const [pStyles, setpStyles] = useState('');
    const [pColors, setpColors] = useState('');
    const [pCategory, setpCategory] = useState('');

    // onClick function for API to generate copy
    const handleGenerate = async () => {
        // try/catch to make the API call
        try {
            setLoad(true);
            // useState values cleaning for pass to API
            const styleList = pStyles.split(',').map((style) => style.trim());
            const colorList = pColors.split(',').map((color) => color.trim());
            
            // API call to AI
            const response = await fetch('/api/ai/modelp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                formId,
                pSite,
                pTitle,
                pStyles: styleList,
                pColors: colorList,
                pCategory
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
                <h2>2 Paragraph Product Copy For Third-Party</h2>
                <p>This form can be used to write a two paragraph product copy for a third-party brand.</p>
                <form>
                    <label>Your Website
                        <input
                        type="text"
                        value={pSite}
                        onChange={(e) => setpSite(e.target.value)}
                        placeholder='example.com'
                        />
                    </label>
                    <label>Product Title
                        <input
                        type="text"
                        value={pTitle}
                        onChange={(e) => setpTitle(e.target.value)}
                        placeholder='My Super Cool Product'
                        />
                    </label>
                    <label>Product Styles
                        <input
                        type="text"
                        value={pStyles}
                        onChange={(e) => setpStyles(e.target.value)}
                        placeholder='modern, organic, etc'
                        />
                    </label>
                    <label>Product Colors
                        <input
                        type="text"
                        value={pColors}
                        onChange={(e) => setpColors(e.target.value)}
                        placeholder='orange, umber, etc'
                        />
                    </label>
                    <label>Product Category
                        <input
                        type="text"
                        value={pCategory}
                        onChange={(e) => setpCategory(e.target.value)}
                        placeholder='product type'
                        />
                    </label>
                    {/* Add more input fields here */}
                    <button type="button" onClick={handleGenerate}>
                        Write My Copy!
                    </button>
                    <p>Multi-paragraph copy may take up to 25 secs to generate.</p>
                </form>
                { isLoading ? (<Loading />) : (<AIGen respy={aigene} />)}
            </main>
        );
    } else {
        return (
            <main className={styles.main}>
                <div>
                    <p>Please login again to view this AI form.</p>
                </div>
            </main>
        );
    }
}