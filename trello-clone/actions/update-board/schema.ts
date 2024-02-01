import { z } from 'zod';
export const updateBoardSchema = z.object({
  title: z
    .string({ required_error: 'Title is required' })
    .min(3, { message: 'Title must be 3 characters long' }),

  id: z.string({
    required_error: 'Id is required',
  }),
});
