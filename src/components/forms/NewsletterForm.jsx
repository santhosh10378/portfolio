'use client';

import Link from 'next/link';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { NewsletterFormSchema } from '@/lib/schemas';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { Card, CardContent } from '@/components/ui/card';
import { newsletterFormHandler } from '@/actions/actions';

export default function NewsletterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(NewsletterFormSchema),
    defaultValues: {
      email: '',
    },
  });

  const processForm = async (data) => {
    try {
      const result = await newsletterFormHandler(data);

      if (result && !result.error) {
        toast.success('Subscribed successfully!');
        reset();
      } else {
        toast.error(result.error || 'An error occurred.');
      }
    } catch (error) {
      toast.error('An unexpected error occurred.');
      console.error('Error processing form:', error);
    }
  };

  return (
    <section>
      <Card className='rounded-lg border-0 dark:border'>
        <CardContent className='flex flex-col gap-8 pt-6 md:flex-row md:justify-between md:pt-8'>
          <div>
            <h2 className='text-2xl font-bold'>Subscribe to my newsletter</h2>
            <p className='text-muted-foreground'>Get updates on my work and projects.</p>
          </div>

          <form onSubmit={handleSubmit(processForm)} className='flex flex-col items-start gap-3'>
            <div className='w-full'>
              <Input type='email' id='email' autoComplete='email' placeholder='Email' className='w-full' {...register('email')} />

              {errors.email?.message && <p className='ml-1 mt-2 text-sm text-rose-400'>{errors.email.message}</p>}
            </div>

            <div className='w-full'>
              <Button type='submit' disabled={isSubmitting} className='w-full disabled:opacity-50'>
                {isSubmitting ? 'Submitting...' : 'Subscribe'}
              </Button>
            </div>

            <div>
              <p className='text-xs text-muted-foreground'>
                We care about your data. Read our{' '}
                <Link href='/privacy-policy' className='font-bold'>
                  privacy&nbsp;policy.
                </Link>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
