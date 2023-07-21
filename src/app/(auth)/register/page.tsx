import { Metadata } from 'next';
import Link from 'next/link';

import Register from '@/components/auth/Register';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Create an AmmaJaan account',
  description: 'Sign up for an AmmaJaan account to checkout',
};

const page = () => {
  return (
    <section>
      <div className="bg-white p-4 md:px-16 md:py-10 rounded border">
        <Register />
      </div>
      <div className="mt-6 mb-2 text-gray-600 text-center">
        Already have an account?{' '}
      </div>
      <Link href={'/login'}>
        <Button className="w-full" variant={'outline'}>
          Login
        </Button>
      </Link>
    </section>
  );
};

export default page;
