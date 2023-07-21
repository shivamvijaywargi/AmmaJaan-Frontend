'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';

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
import { registerUserFn } from '@/api/authApi';
import useAuthStore from '@/stores/authStore';
import { AxiosError } from '@/api/axiosInstance';

const formSchema = z.object({
  fullName: z
    .string()
    .min(5, {
      message: 'Full Name must be at least 5 characters.',
    })
    .max(25, { message: 'Full Name must be less than 25 characters.' }),
  email: z.string().email(),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters.',
  }),
  phoneNumber: z.string().min(10, {
    message: 'Phone number must be at least 10 characters.',
  }),
});

export type registerUserPayload = z.infer<typeof formSchema>;

const Register = () => {
  const store = useAuthStore();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<registerUserPayload>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      phoneNumber: '',
    },
  });

  async function onSubmit(values: registerUserPayload) {
    setIsLoading(true);

    try {
      const data = await registerUserFn(values);

      if (data.success) {
        setIsLoading(false);

        store.setRequestLoading(false);

        store.setAuthUser({
          accessToken: data?.accessToken,
          role: data?.user?.role,
        });

        toast.success('Registration successful');

        router.push('/');
      }
    } catch (error) {
      store.setRequestLoading(false);

      setIsLoading(false);

      if (error instanceof AxiosError) {
        if (error.response?.status === 400) {
          toast.error(error.response.data?.message);
        }
      }

      let myError: any = error;

      if (myError?.name) {
        toast.error(myError?.issues[0].message);
      }

      toast.error('Something went wrong, please try again later.');
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 my-4 min-w-full w-[300px] md:w-[375px] max-w-lg"
      >
        <div className="space-y-4 w-full">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Shivam Vijaywargi" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="9876543210" type="number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full" isLoading={isLoading}>
          Register
        </Button>
      </form>
    </Form>
  );
};

export default Register;
