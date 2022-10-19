import BlogOverview from '../../components/Pages/BlogOverview';

import { collectStaticContent } from '../../helpers/mdx';
import type { BlogPostMeta } from '../../types';
import type { MDXOverviewPageProps } from '../../types/mdx';

export const getStaticProps: MDXOverviewPageProps<BlogPostMeta> = async () => {

  return {
    props: await collectStaticContent({
      type: 'posts',
      filter: (i) => i.isPublished,
      sort: (a, b) => (new Date(a.publishedOn)).valueOf() - (new Date(b.publishedOn)).valueOf(),
    }),
  };
};

export default BlogOverview;
