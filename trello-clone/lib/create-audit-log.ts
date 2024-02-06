import { auth, currentUser } from '@clerk/nextjs';

import { db } from '@/lib/db';

export enum ACTION {
  CREATE,
  UPDATE,
  DELETE,
}

export enum ENTITY_TYPE {
  BOARD,
  CARD,
  LIST,
}

export function actionToString(action: ACTION): string {
  switch (action) {
    case ACTION.CREATE:
      return 'CREATE';
    case ACTION.UPDATE:
      return 'UPDATE';
    case ACTION.DELETE:
      return 'DELETE';
    default:
      throw new Error('Invalid enum value');
  }
}

export function entityTypeToString(entityType: ENTITY_TYPE): string {
  switch (entityType) {
    case ENTITY_TYPE.BOARD:
      return 'BOARD';
    case ENTITY_TYPE.CARD:
      return 'CARD';
    case ENTITY_TYPE.LIST:
      return 'LIST';
    default:
      throw new Error('Invalid enum value');
  }
}

interface Props {
  entityId: string;
  entityType: ENTITY_TYPE;
  entityTitle: string;
  action: ACTION;
}

export const createAuditLog = async (props: Props) => {
  try {
    const { orgId } = auth();
    const user = await currentUser();

    if (!user || !orgId) {
      throw new Error('User not found!');
    }

    const { entityId, entityType, entityTitle, action } = props;

    await db.auditLog.create({
      data: {
        orgId,
        entityId,
        entityType: entityTypeToString(entityType),
        entityTitle,
        action: actionToString(action),
        userId: user.id,
        userImage: user?.imageUrl,
        userName: user?.firstName + ' ' + user?.lastName,
      },
    });
  } catch (error) {
    console.log('[AUDIT_LOG_ERROR]', error);
  }
};
