import Image from 'next/image';
import homeImg from 'public/home.jpg';

export default function Home() {
   return (
      <div className='home'>
         Home page
         <div className='absolute -z-30 inset-0'>
            <Image
               src={homeImg}
               alt='Home Image'
               fill
               style={{
                  objectFit: 'cover',
               }}
            />
         </div>
      </div>
   );
}
