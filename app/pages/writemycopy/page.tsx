'use client'
import type { NextPage } from 'next/types';
import { useSession } from 'next-auth/react';
import styles from './page.module.css';
import React, { useState } from 'react';
import HeaderCust from "@/app/components/Header/header";
import FooterCust from "@/app/components/Footer/footer";
import Form3 from "@/app/components/ModelForms/Form3/mform3";
import Form2 from "@/app/components/ModelForms/Form2/mform2";
import Brand1 from "@/app/components/ModelForms/BForm1/bform1";



const WriteMyCopy: NextPage = () => {
  // Declaring the useStates and values
  const {data: session} = useSession();
  // useState for formType selection
  const [ formType, setformType ] = useState('mform2');

  // Handle user's form choice
  const handleChange = (fT: string) => {
    switch (fT) {
      case 'mform2':
        return <Form2 />;
      case 'mform3':
        return <Form3 />;
      case 'bform1':
        return <Brand1 />;
      default:
        return <Form2 />;
    }
  };

  if (session) {
      return (
          <main className={styles.main}>
          <HeaderCust />
            <div className={styles.form}>
              <select className={styles.select} onChange={(e) => setformType(e.target.value)} defaultValue="mform2">
                <option value="mform2">2 Paragraph 3rd-Party</option>
                <option value="mform3">3 Paragraph 3rd-Party</option>
                <option value="bform1">Brand Paragraph 3rd-Party</option>
              </select>
              {handleChange(formType)}
            </div>
          <FooterCust />
          </main>
        );

  } else {
      return (
          <main className={styles.main}>
              <div>
                <HeaderCust />
                <FooterCust />
              </div>
          </main>
      );
  };

};

export default WriteMyCopy;