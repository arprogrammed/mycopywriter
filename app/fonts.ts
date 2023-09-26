import { Kalam, Ubuntu } from 'next/font/google';

export const kalam = Kalam({ 
    weight: '700',
    subsets: ['latin', 'latin-ext', 'devanagari'],
    display: 'swap',
});
  
export const ubuntu = Ubuntu({ 
    weight: '500',
    subsets: ['latin', 'latin-ext'],
    display: 'swap',
});