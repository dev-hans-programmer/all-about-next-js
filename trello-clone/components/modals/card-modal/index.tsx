'use client';

import { CardWithList } from '@/types';
import { useCardModal } from '@/hooks/use-card-modal';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useQuery } from '@tanstack/react-query';
import { fetcher } from '@/lib/fetcher';
import { Header } from './header';

export const CardModal = () => {
  const id = useCardModal((state) => state.id);
  const isOpen = useCardModal((state) => state.isOpen);
  const onClose = useCardModal((state) => state.onClose);

  const { data: cardData } = useQuery<CardWithList>({
    queryKey: ['card', id],
    queryFn: () => fetcher(`/api/cards/${id}`),
  });

  //   const { data: auditLogsData } = useQuery<AuditLog[]>({
  //     queryKey: ['card-logs', id],
  //     queryFn: () => fetcher(`/api/cards/${id}/logs`),
  //   });

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        {!cardData ? <Header.Skeleton /> : <Header data={cardData} />}
      </DialogContent>
    </Dialog>
  );
};
