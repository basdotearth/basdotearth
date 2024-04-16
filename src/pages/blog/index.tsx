import BlogOverview from 'components/Pages/BlogOverview';
import type { BlogPostMeta } from 'types/index';
import type { MDXOverviewPageProps } from 'types/mdx';
import { collectStaticContent } from 'helpers/mdx';

export const getStaticProps: MDXOverviewPageProps<BlogPostMeta> = async () => {

  return {
    props: await collectStaticContent({
      type: 'posts',
      filter: (i) => i.isPublished,
      sort: (a, b) => (new Date(b.publishedOn)).valueOf() - (new Date(a.publishedOn)).valueOf(),
    }),
  };
};

export default BlogOverview;
