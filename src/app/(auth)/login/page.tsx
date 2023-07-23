import Login from '@/components/auth/Login';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sign in to AmmaJaan',
  description: 'Sign in to your account to checkout',
};

const page = () => {
  return (
    <section>
      <div className="bg-white p-4 md:px-16 md:py-10 rounded border">
        <Login />
      </div>
      <div className="mt-6 mb-2 text-gray-600 text-center">
        Don&lsquo;t already have an account?{' '}
      </div>
      <Link href={'/register'}>
        <Button className="w-full" variant={'outline'}>
          Register
        </Button>
      </Link>
    </section>
  );
};

export default page;
