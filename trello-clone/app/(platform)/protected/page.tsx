import { UserButton, currentUser } from '@clerk/nextjs';

const Protected = async () => {
  const user = await currentUser();
  return (
    <div>
      {JSON.stringify(user, null, 4)}
      <UserButton afterSignOutUrl='/' />
    </div>
  );
};

export default Protected;
