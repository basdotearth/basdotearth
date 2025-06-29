import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

import type { PlaygroundMeta } from 'types/index';
import PlaygroundOverview from 'components/Pages/PlaygroundOverview';
import { collectStaticContent } from 'helpers/mdx';

export const metadata: Metadata = {
  title: 'Playground',
  description: 'Quick snippets, POCs and TIL today.',
};

const Page = async () => {
  const result = await collectStaticContent<PlaygroundMeta>({
    type: 'playground',
    filter: (i) => i.isPublished,
    sort: (a, b) => (new Date(a.publishedOn)).valueOf() - (new Date(b.publishedOn)).valueOf(),
  });

  if ('errorCode' in result) {
    redirect('/404');
  }

  return <PlaygroundOverview items={result.items} />;
};

export default Page;
