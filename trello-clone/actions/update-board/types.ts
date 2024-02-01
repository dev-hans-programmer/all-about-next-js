import { z } from 'zod';
import { updateBoardSchema } from './schema';
import { ActionState } from '@/lib/create-safe-action';
import { Board } from '@prisma/client';

export type InputType = z.infer<typeof updateBoardSchema>;
export type ReturnType = ActionState<InputType, Board>;
