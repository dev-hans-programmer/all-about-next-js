import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { ListContainer } from './_components/list-container';

interface BoardIdProps {
  params: {
    boardId: string;
  };
}

export default async function BoardIdPage({
  params: { boardId },
}: BoardIdProps) {
  const { orgId } = auth();

  if (!orgId) redirect('/select-org');

  const lists = await db.list.findMany({
    where: {
      boardId,
      board: {
        orgId,
      },
    },
    include: {
      cards: {
        orderBy: {
          order: 'asc',
        },
      },
    },
    orderBy: {
      order: 'asc',
    },
  });

  return (
    <div>
      <ListContainer data={lists} boardId={boardId} />
    </div>
  );
}
