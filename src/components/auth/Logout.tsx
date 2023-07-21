import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { logoutUserFn } from '@/api/authApi';
import useAuthStore from '@/stores/authStore';

const Logout = () => {
  const store = useAuthStore();
  const router = useRouter();

  async function logoutUser() {
    try {
      const data = await logoutUserFn();

      if (data.success) {
        store.setRequestLoading(false);

        store.setAuthUser({
          accessToken: '',
          role: 0,
        });

        toast.success('Logout successful');

        router.push('/');
      }
    } catch (error) {
      store.setRequestLoading(false);

      toast.error('Something went wrong, please try again later.');
    }
  }

  return (
    <p className="w-full cursor-pointer" onClick={() => logoutUser()}>
      Logout
    </p>
  );
};

export default Logout;
