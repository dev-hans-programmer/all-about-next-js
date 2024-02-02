'use client';

import { toast } from 'sonner';
import { useEffect, useState } from 'react';

import { useAction } from '@/hooks/use-action';
import { List } from '@prisma/client';
import { ListWithCards } from '@/types';
import { ListForm } from './list-form';

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

  return (
    <div>
      <ListForm />
    </div>
  );
};
