import React from 'react';
import { Navbar } from './_components/navbar';

function MarketingLayout({ children }: { children: React.ReactNode }) {
   return (
      <div className='h-full bg-slate-100'>
         {/* Navbar */}
         <Navbar />
         <main className='pt-40 mb-20 bg-slate-100'>{children}</main>
         {/* Footer */}
      </div>
   );
}

export default MarketingLayout;
