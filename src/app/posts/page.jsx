import PostsWithSearch from '@/components/PostsWithSearch';
import { getPosts } from '@/lib/posts';

const PostsPage = async () => {
  const posts = await getPosts();

  return (
    <div className='pb-24 pt-28'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-12'>Posts</h1>
        <PostsWithSearch posts={posts} />
      </div>
    </div>
  );
};

export default PostsPage;
