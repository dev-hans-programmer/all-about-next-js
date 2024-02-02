'use client';

import { toast } from 'sonner';
import { useEffect, useState } from 'react';

import { useAction } from '@/hooks/use-action';
import { List } from '@prisma/client';
import { ListWithCards } from '@/types';
import { ListForm } from './list-form';
import { ListItem } from './list-item';

interface ListContainerProps {
  data: ListWithCards[];
  boardId: string;
}

function reorder<T>(list: T[], startIndex: number, endIndex: number) {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
}

export const ListContainer = ({ data, boardId }: ListContainerProps) => {
  const [orderedData, setOrderedData] = useState(data);

  useEffect(() => {
    setOrderedData(data);
  }, [data]);

  return (
    <ol className='flex gap-x-3 h-full'>
      {orderedData.map((list, index) => (
        <ListItem key={list.id} data={list} index={index} />
      ))}
      <ListForm />
      <div className='flex-shrink-0 w-1'></div>
    </ol>
  );
};
