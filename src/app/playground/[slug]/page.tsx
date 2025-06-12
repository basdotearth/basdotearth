import { redirect } from 'next/navigation';

import type { BlogPostMeta } from 'types/index';
import type { PageTypeMeta } from 'types/mdx';
import SinglePost from 'components/Pages/SinglePost';
import { collectStaticContentSlugs, getStaticContentBySlug } from 'helpers/mdx';

export const dynamicParams = false;

export const generateStaticParams = async () => {
  const slugs = await collectStaticContentSlugs('playground');
  return slugs.map(slug => ({ slug }));
};

interface PageProps {
  params: Promise<PageTypeMeta>
}

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;
  const result = await getStaticContentBySlug<BlogPostMeta>({ slug, type: 'playground' });
  if ('errorCode' in result) {
    redirect('/404');
  }

  return <SinglePost code={result.code} meta={result.meta} />;
};

export default Page;
