import { AuditLog } from '@prisma/client';
import { ACTION, actionToString } from './create-audit-log';

export const generateLogMessage = (log: AuditLog) => {
  const { action, entityTitle, entityType } = log;

  switch (action) {
    case actionToString(ACTION.CREATE):
      return `created ${entityType.toLowerCase()} "${entityTitle}"`;
    case actionToString(ACTION.UPDATE):
      return `updated ${entityType.toLowerCase()} "${entityTitle}"`;
    case actionToString(ACTION.DELETE):
      return `deleted ${entityType.toLowerCase()} "${entityTitle}"`;
    default:
      return `unknown action ${entityType.toLowerCase()} "${entityTitle}"`;
  }
};
