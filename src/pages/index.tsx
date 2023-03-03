import React, { useState } from 'react';

import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function HomePage() {
  const [count, setCount] = useState(0);
  const [fizzbuzz, setFizzbuzz] = useState('');

  const handleCounter = async () => {
    setCount(count + 1);

    try {
      const res = await fetch(`${API_URL}/fizzbuzz/fizzbuzz`, {
        method: 'POST',
        body: JSON.stringify({ count: count + 1 }),
      });

      if (res.ok) {
        const data = await res.json();
        setFizzbuzz(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
            <p className='mt-2 text-sm'>Your count</p>
            <p className='mb-3'>{count}</p>

            <button
              className='mt-6 rounded-[5px] bg-button px-[32px] py-[14px] text-white'
              onClick={() => handleCounter()}
            >
              Push me!
            </button>
            <h1 className='mt-[55px] min-h-[80px]'>{fizzbuzz}</h1>

            <footer className='absolute bottom-2 text-gray-700'>
              © {new Date().getFullYear()} By{' '}
              <UnderlineLink href='https://github.com/smarterdegen/'>
                smarterdegen
              </UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
