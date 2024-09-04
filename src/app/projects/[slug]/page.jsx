import Link from 'next/link';
import Image from 'next/image';

import { formatDate } from '@/lib/utils';
import MDXContent from '@/components/MDXContent';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { getProjectBySlug } from '@/lib/projects';
import { notFound } from 'next/navigation';

export default async function Project({ params }) {
  const { slug } = params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { metadata, content } = project;
  const { title, image, author, publishedAt } = metadata;

  return (
    <div className='pb-24 pt-28'>
      <div className='container max-w-3xl'>
        <Link href='/projects' className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'>
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to projects</span>
        </Link>

        {image && (
          <div className='relative mb-6 w-full aspect-video overflow-hidden rounded-lg'>
            <Image src={image} alt={title || ''} className='object-cover' fill />
          </div>
        )}

        <header>
          <h1 className='title'>{title}</h1>
          <p className='mt-3 text-xs text-muted-foreground'>
            {author} / {formatDate(publishedAt ?? '')}
          </p>
        </header>

        <div className='prose mt-16 dark:prose-invert'>
          <MDXContent source={content} />
        </div>
      </div>
    </div>
  );
}
