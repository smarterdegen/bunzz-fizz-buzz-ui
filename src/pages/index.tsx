import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
            <p className='mt-2 text-sm'>Your count</p>
            <p className='mb-3'>3</p>

            <button className='mt-6 rounded-[5px] bg-button px-[32px] py-[14px] text-white'>
              Push me!
            </button>
            <h1 className='mt-[55px]'>Fizz</h1>

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
