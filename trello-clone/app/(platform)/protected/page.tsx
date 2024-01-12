import { currentUser } from '@clerk/nextjs';

const Protected = async () => {
  const user = await currentUser();
  return <div>{JSON.stringify(user, null, 4)}</div>;
};

export default Protected;
    