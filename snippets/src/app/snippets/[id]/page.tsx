import { db } from '@/db';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import * as actions from '@/actions';

interface Props {
   params: { id: string };
   searchParams: Record<string, string>;
}

export default async function ShowSnippetPage({ params: { id } }: Props) {
   const record = await db.snippet.findFirst({
      where: {
         id: +id,
      },
   });

   if (!record) return notFound();

   const { title, code } = record;

   const deleteSnippetAction = actions.deleteSnippet.bind(null, +id);

   return (
      <div>
         <div className='flex m-4 justify-between items-center'>
            <h1 className='text-xl font-bold'>{title}</h1>
            <div className='flex gap-2 items-center '>
               <Link
                  href={`/snippets/${id}/edit`}
                  className='p-2 border rounded'
               >
                  Edit
               </Link>
               <form action={deleteSnippetAction}>
                  <button className='p-2 border rounded'>Delete</button>
               </form>
            </div>
         </div>
         <pre className='p-3 border rounded bg-gray-200 border-gray-200'>
            <code>{code}</code>
         </pre>
      </div>
   );
}
