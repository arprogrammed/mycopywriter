'use client'
import type { NextPage } from "next";
import { useSearchParams } from 'next/navigation';
import styles from './page.module.css';
import React from 'react';
import LoginButt from "@/app/components/LoginButton/login-btn";

const Checkout: NextPage = () => {
    const searchParams = useSearchParams();
    const state = searchParams.get('state');

    const handleCheckout = async () => {
        const response = await fetch('/api/checkout', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify({
                state
            }),
        });

        const body = await response.json();
        window.location.href = body.url;
    };

    if(state) {
        return (
            <div className={styles.main}>
                <button onClick={handleCheckout}>Buy Now!</button>
            </div>
        );
    } else {
        return (
            <div className={styles.main}>
                <LoginButt />
            </div>
        );
    }
};

export default Checkout;