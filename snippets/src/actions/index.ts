'use server';

import { db } from '@/db';
import { redirect } from 'next/navigation';

export async function createSnippet(
   formState: { message: string },
   formData: FormData
) {
   try {
      // Check the user's input
      const title = formData.get('title');
      const code = formData.get('code');

      if (typeof title !== 'string' || title.length < 3) {
         return {
            message: 'Title must be longer',
         };
      }

      if (typeof code !== 'string' || code.length < 10) {
         return {
            message: 'Code must be longer',
         };
      }

      // Create a new record in the db
      await db.snippet.create({
         data: {
            title,
            code,
         },
      });
      throw new Error('Fuck off');
   } catch (err: unknown) {
      if (err instanceof Error) {
         return {
            message: err.message,
         };
      }
      return {
         message: 'Something went wrong!',
      };
   }

   // Redirect the user
   redirect('/');
}

export async function editSnippet(id: number, code: string) {
   await db.snippet.update({
      where: {
         id,
      },
      data: {
         code,
      },
   });
   redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
   await db.snippet.delete({ where: { id } });
   redirect('/');
}
