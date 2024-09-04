import NewsletterForm from '@/components/forms/NewsletterForm';
import Intro from '@/components/Intro';
import RecentPosts from '@/components/RecentPosts';
import RecentProjects from '@/components/RecentProjects';

export default function Home() {
  return (
    <div className='pb-24 pt-28'>
      <div className='container max-w-3xl'>
        <Intro />
        <RecentPosts />
        <RecentProjects />
        <NewsletterForm />
      </div>
    </div>
  );
}
