'use client'
import { useSession } from 'next-auth/react';
import styles from './component.module.css';
import React, { useState } from 'react';
import AIGen from '@/app/components/GeneratedAIResp/respy'

export default function Form2(){ 
    const { data: session } = useSession();
    const formId = {id: 'mform2'};
    const [aigene, setAigene] = useState('Your Response Will Appear Here');
    const [pSite, setpSite] = useState('');
    const [pTitle, setpTitle] = useState('');
    const [pStyles, setpStyles] = useState('');
    const [pColors, setpColors] = useState('');
    const [pCategory, setpCategory] = useState('');

    // onClick function for API to generate copy
    const handleGenerate = async () => {

        // try/catch to make the API call
        try {
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
            const { status, value } = myRes;
            console.log(value);
            setAigene(value);


            } else {
            // Catch for an error in a response
            console.error(`Error generating data:`, response.statusText);
            }
            
        } catch (error) {
            // Catch for failure in the API call
            console.error(`Error generating data:`, error);
        };

    };

    if (session) {
        return (
            <main className={styles.main}>
                <div>
                    <h1>Where Do I Start?</h1>
                    <form>
                    <label>Your Website
                        <input
                        type="text"
                        value={pSite}
                        onChange={(e) => setpSite(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>Product Title
                        <input
                        type="text"
                        value={pTitle}
                        onChange={(e) => setpTitle(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>Product Styles
                        <input
                        type="text"
                        value={pStyles}
                        onChange={(e) => setpStyles(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>Product Colors
                        <input
                        type="text"
                        value={pColors}
                        onChange={(e) => setpColors(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>Product Category
                        <input
                        type="text"
                        value={pCategory}
                        onChange={(e) => setpCategory(e.target.value)}
                        />
                    </label>
                    {/* Add more input fields here */}
                    <br />
                    <button type="button" onClick={handleGenerate}>
                        Write My Copy!
                    </button>
                    </form>
                    <AIGen respy={aigene} />
                </div>
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