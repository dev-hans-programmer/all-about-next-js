import SnippetEditForm from '@/components/snippet-edit-form';
import { db } from '@/db';
import { notFound } from 'next/navigation';

interface Props {
   params: { id: string };
}

export default async function SnippetEditPage({ params: { id } }: Props) {
   const snippet = await db.snippet.findFirst({
      where: {
         id: +id,
      },
   });

   if (!snippet) return notFound();

   return (
      <div>
         <SnippetEditForm snippet={snippet} />
      </div>
   );
}
