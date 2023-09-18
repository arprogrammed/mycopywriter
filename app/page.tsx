'use client'
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import styles from './page.module.css';
import React from 'react';
import HeaderCust from './components/Header/header';
import LoginButt from "./components/LoginButton/login-btn";

const Home: NextPage = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <main className={styles.main}>
          <div>
            <HeaderCust />
          </div>
        </main>
      </div>
    );
    } else {
    return (
      <div>
        <main className={styles.main}>
          <div>
            <LoginButt />
          </div>
        </main>
      </div>
    );
  };
};

export default Home;