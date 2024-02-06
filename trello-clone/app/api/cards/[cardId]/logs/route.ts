import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

import { db } from '@/lib/db';
import { ENTITY_TYPE, entityTypeToString } from '@/lib/create-audit-log';

export async function GET(request: Request, params: any) {
  try {
    const { userId, orgId } = auth();

    if (!userId || !orgId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    console.log('ORG ID', params);

    const auditLogs = await db.auditLog.findMany({
      where: {
        orgId,
        entityId: params.cardId,
        entityType: entityTypeToString(ENTITY_TYPE.CARD),
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: 3,
    });

    return NextResponse.json(auditLogs);
  } catch (error) {
    return new NextResponse('Internal Error', { status: 500 });
  }
}
