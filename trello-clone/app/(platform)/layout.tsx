import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from 'sonner';

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <Toaster />
      <div className='h-full flex items-center justify-center'>{children}</div>
    </ClerkProvider>
  );
};

export default PlatformLayout;
