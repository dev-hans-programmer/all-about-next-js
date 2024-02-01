'use client';

import { createBoard } from '@/actions/create-board';
import { FormInput } from '@/components/form/form-input';
import { FormSubmit } from '@/components/form/form-submit';
import { useAction } from '@/hooks/use-action';

export const Form = () => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess(data) {
      console.log('SUCCESS DATA', data);
    },
  });

  const onSubmit = (data: FormData) => {
    const title = data.get('title') as string;
    execute({ title });
  };

  return (
    <form action={onSubmit}>
      <FormInput label='Board title' id='title' errors={fieldErrors} />
      <FormSubmit variant='primary'>Create </FormSubmit>
    </form>
  );
};
