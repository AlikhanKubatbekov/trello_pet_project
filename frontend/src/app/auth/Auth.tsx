'use client';

import { Button } from '@/components/ui/buttons/Button';
import { Field } from '@/components/ui/fields/Field';
import { Heading } from '@/components/ui/heading/Heading';
import { DASHBOARD_PAGES } from '@/config/pages-url.config';
import { authService } from '@/services/auth.service';
import { IAuthForm } from '@/types/auth.types';
import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import cn from 'clsx';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import styles from './auth.module.css';

export function Auth() {
  const { register, handleSubmit, reset } = useForm<IAuthForm>({
    mode: 'onChange',
  });

  const [isLoginForm, setIsLoginForm] = useState(false);

  const { push } = useRouter();

  const { mutate } = useMutation({
    mutationKey: ['auth'],
    mutationFn: (data: IAuthForm) => authService.main(isLoginForm ? 'login' : 'register', data),
    onSuccess() {
      toast.success('Successfully login!');
      reset();
      push(DASHBOARD_PAGES.HOME);
    },
    onError: (e) => {
      if (isAxiosError(e) && e.response) {
        const { message } = e.response.data;

        console.log(e.response);
        const errorMessage = Array.isArray(message) ? message.join(', ') : message;
        toast.error(errorMessage);
      } else {
        toast.error('Some error happened!');
      }
    },
  });

  const onSubmit: SubmitHandler<IAuthForm> = (data) => {
    mutate(data);
  };

  return (
    <div className='flex min-h-screen'>
      <form className={cn(styles.form)} onSubmit={handleSubmit(onSubmit)}>
        <Heading title='Auth' />

        <Field
          id='email'
          label='Email:'
          placeholder='Enter email:'
          type='email'
          extra='mb-4'
          {...register('email', {
            required: 'Email is required!',
          })}
        />

        <Field
          id='password'
          label='Password: '
          placeholder='Enter password: '
          type='password'
          {...register('password', {
            required: 'Password is required!',
          })}
          extra='mb-6'
        />

        <div className={cn(styles.buttonActions)}>
          <Button onClick={() => setIsLoginForm(true)}>Login</Button>
          <Button onClick={() => setIsLoginForm(false)}>Register</Button>
        </div>
      </form>
    </div>
  );
}
