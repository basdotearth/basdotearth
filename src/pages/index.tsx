import Home from '../components/Pages/Home';

import { collectStaticContent } from '../helpers/mdx';
import { resolvePromisesObject } from '../helpers/promises';
import type { BlogPostMeta, PlaygroundMeta } from '../types';
import type { CollectedResult, ErrorResult, MDXCombinedPageProps } from '../types/mdx';

type HomeProps = { posts: BlogPostMeta, playground: PlaygroundMeta };

export const getStaticProps: MDXCombinedPageProps<HomeProps> = async () => {
  const results = await resolvePromisesObject({
    posts: collectStaticContent<BlogPostMeta>({
      type: 'posts',
      filter: (i) => i.isPublished,
      sort: (a, b) => (new Date(a.publishedOn)).valueOf() - (new Date(b.publishedOn)).valueOf(),
    }),
    playground: collectStaticContent<PlaygroundMeta>({
      type: 'playground',
      filter: (i) => i.isPublished,
      sort: (a, b) => (new Date(a.publishedOn)).valueOf() - (new Date(b.publishedOn)).valueOf(),
    }),
  }) as { posts: CollectedResult<BlogPostMeta> | ErrorResult, playground: CollectedResult<PlaygroundMeta> | ErrorResult };

  const error = Object.values(results).find(result => 'errorCode' in result);
  if (error !== undefined) {
    return { props: error as ErrorResult };
  }

  return { props: results as { posts: CollectedResult<BlogPostMeta>, playground: CollectedResult<PlaygroundMeta> } };
};

export default Home;
