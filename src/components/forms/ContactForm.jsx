'use client';

import Link from 'next/link';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactFormSchema } from '@/lib/schemas';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { contactFormHandler } from '@/actions/actions';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const processForm = async (data) => {
    console.log(data);

    const result = await contactFormHandler(data);

    if (result) {
      toast.success('Message sent successfully!');
      reset();
    }
  };

  return (
    <section className='relative isolate'>
      {/* Form */}
      <div className='relative'>
        <form onSubmit={handleSubmit(processForm)} className='mt-16 lg:flex-auto' noValidate>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
            {/* Name */}
            <div>
              <Input id='name' type='text' placeholder='Name' autoComplete='given-name' {...register('name')} />
              {errors.name?.message && <p className='ml-1 mt-2 text-sm text-rose-400'>{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div>
              <Input type='email' id='email' autoComplete='email' placeholder='Email' {...register('email')} />
              {errors.email?.message && <p className='ml-1 mt-2 text-sm text-rose-400'>{errors.email.message}</p>}
            </div>

            {/* Message */}
            <div className='sm:col-span-2'>
              <Textarea rows={4} placeholder='Message' {...register('message')} />
              {errors.message?.message && <p className='ml-1 mt-2 text-sm text-rose-400'>{errors.message.message}</p>}
            </div>
          </div>
          <div className='mt-6'>
            <Button type='submit' disabled={isSubmitting} className='w-full disabled:opacity-50'>
              {isSubmitting ? 'Submitting...' : 'Contact Us'}
            </Button>
          </div>
          <p className='mt-4 text-xs text-muted-foreground'>
            By submitting this form, I agree to the{' '}
            <Link href='/privacy-policy' className='font-bold'>
              privacy&nbsp;policy.
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}
