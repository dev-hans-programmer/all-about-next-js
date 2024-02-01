import { z } from 'zod';
export const createBoardSchema = z.object({
  title: z
    .string({ required_error: 'Title is required' })
    .min(3, { message: 'Title must be 3 characters long' }),

  image: z.string({
    required_error: 'Image is required',
  }),
});
