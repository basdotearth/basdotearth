import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

import BlogOverview from 'components/Pages/BlogOverview';
import type { BlogPostMeta } from 'types/index';
import { collectStaticContent } from 'helpers/mdx';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blogposts on Product, Code and other things.',
};

const Page = async () => {
  const result = await collectStaticContent<BlogPostMeta>({
    type: 'posts',
    filter: (i) => i.isPublished,
    sort: (a, b) => (new Date(b.publishedOn)).valueOf() - (new Date(a.publishedOn)).valueOf(),
  });

  if ('errorCode' in result) {
    redirect('/404');
  }

  return <BlogOverview items={result.items} />;
};

export default Page;
