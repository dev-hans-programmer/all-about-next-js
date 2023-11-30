import { db } from '@/db';
import { redirect } from 'next/navigation';

export default function CreateSnippetPage() {
   async function createSnippet(formData: FormData) {
      // This needs to be a server action
      'use server';
      // Check the user's input
      const title = formData.get('title') as string;
      const code = formData.get('code') as string;

      // Create a new record in the db
      await db.snippet.create({
         data: {
            title,
            code,
         },
      });

      // Redirect the user
      redirect('/');
   }

   return (
      <form action={createSnippet}>
         <h3 className='font-bold m-3'>Create a Snippet</h3>
         <div className='flex flex-col gap-4'>
            <div className='flex gap-4'>
               <label className='w-12' htmlFor='title'>
                  Title
               </label>
               <input
                  type='text'
                  name='title'
                  className='border rounded p-2 w-full'
               />
            </div>

            <div className='flex gap-4'>
               <label className='w-12' htmlFor='code'>
                  Code
               </label>
               <textarea name='code' className='border rounded p-2 w-full' />
            </div>
            <div className='flex gap-4'>
               <label htmlFor='' className='w-12'></label>
               <button type='submit' className='bg-blue-200 p-2 rounded w-full'>
                  Create
               </button>
            </div>
         </div>
      </form>
   );
}
