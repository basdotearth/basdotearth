import PlaygroundOverview from '../../components/Pages/PlaygroundOverview';

import { collectStaticContent } from '../../helpers/mdx';
import type { PlaygroundMeta } from '../../types';
import type { MDXOverviewPageProps } from '../../types/mdx';

export const getStaticProps: MDXOverviewPageProps<PlaygroundMeta> = async () => {
  return {
    props: await collectStaticContent({
      type: 'playground',
      filter: (i) => i.isPublished,
      sort: (a, b) => (new Date(a.publishedOn)).valueOf() - (new Date(b.publishedOn)).valueOf(),
    }),
  };
};

export default PlaygroundOverview;
