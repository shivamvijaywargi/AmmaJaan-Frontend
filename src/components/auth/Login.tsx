'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { loginUserFn } from '@/api/authApi';
import useAuthStore from '@/stores/authStore';
import { AxiosError } from '@/api/axiosInstance';

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().trim().min(8, {
    message: 'Password must be at least 8 characters.',
  }),
});

export type loginUserPayload = z.infer<typeof formSchema>;

const Login = () => {
  const store = useAuthStore();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<loginUserPayload>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: loginUserPayload) {
    setIsLoading(true);

    try {
      const data = await loginUserFn(values);

      if (data.success) {
        setIsLoading(false);

        store.setRequestLoading(false);

        store.setAuthUser({
          accessToken: data?.accessToken,
          role: data?.user?.role,
        });

        toast.success('Login successful');

        router.push('/');
      }
    } catch (error) {
      store.setRequestLoading(false);

      setIsLoading(false);

      if (error instanceof AxiosError) {
        if (error.response?.status === 400) {
          toast.error('Invalid email or password');
        }
      }

      toast.error('Something went wrong, please try again later.');
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 min-w-full w-[300px] md:w-[375px] max-w-lg my-4"
      >
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="shivam@ammajaan.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="*************"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full" isLoading={isLoading}>
          Login
        </Button>
      </form>
    </Form>
  );
};

export default Login;
