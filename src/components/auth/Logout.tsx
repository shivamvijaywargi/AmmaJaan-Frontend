import { logoutUserFn } from '@/api/authApi';
import useAuthStore from '@/stores/authStore';
import { useMutation } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const Logout = () => {
  const store = useAuthStore();
  const router = useRouter();

  const { mutate: logoutUser, isLoading } = useMutation(() => logoutUserFn(), {
    onMutate() {
      store.setRequestLoading(true);
    },
    onSuccess: () => {
      store.setRequestLoading(false);
      store.setAuthUser({
        accessToken: '',
        role: 0,
      });
      toast.success('Logout successful');
      router.push('/');
    },
    onError: () => {
      store.setRequestLoading(false);
      toast.error('Something went wrong, please try again later.');
    },
  });

  return (
    <p className="w-full cursor-pointer" onClick={() => logoutUser()}>
      Logout
    </p>
  );
};

export default Logout;
