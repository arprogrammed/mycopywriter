'use client'
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import styles from './page.module.css';
import React from 'react';
import HeaderCust from './components/Header/header';
import FooterCust from "./components/Footer/footer";

const Home: NextPage = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <main className={styles.main}>
            <HeaderCust />
            <div className={styles.beta}>
              <h2>This is a Beta deployment of the application for the purpose of testing. Exclusive access only allowed.</h2>
            </div>
            <FooterCust />
        </main>
      </div>
    );
    } else {
    return (
      <div>
        <main className={styles.main}>
            <HeaderCust />
            <div className={styles.beta}>
              <h2>This is a Beta deployment of the application for the purpose of testing. Exclusive access only allowed.</h2>
            </div>
            <FooterCust />
        </main>
      </div>
    );
  };
};

export default Home;