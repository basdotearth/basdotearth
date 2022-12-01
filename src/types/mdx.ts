import { GetStaticPaths, GetStaticProps, NextPage } from 'next/types';

export type ContentFilter<Meta> = (item: CollectedItem<Meta>) => boolean;
export type ContentSort<Meta> = (itemA: CollectedItem<Meta>, itemB: CollectedItem<Meta>) => number;

export type PageTypeContent<Meta> = {
  code: string;
  meta: Meta;
};

export type PageTypeSlug = {
  slug: string;
};

export type CollectedItem<Meta> = Meta & PageTypeSlug;

export type CollectedResult<Meta> = {
  items: CollectedItem<Meta>[];
};
export type ErrorResult = { errorCode: 404 | 500 };

export type MDXStaticPage<Meta> = NextPage<PageTypeContent<Meta>>;
export type MDXOverviewPage<Meta> = NextPage<CollectedResult<Meta>>;
export type MDXStaticPageProps<Meta> = GetStaticProps<PageTypeContent<Meta> | ErrorResult, PageTypeSlug>;
export type MDXOverviewPageProps<Meta> = GetStaticProps<CollectedResult<Meta> | ErrorResult, PageTypeSlug>;
export type MDXStaticPaths = GetStaticPaths<PageTypeSlug>;

export type MDXCombinedPageProps<Meta extends Record<string, unknown>> = GetStaticProps<
  { [I in keyof Meta]: CollectedResult<Meta[I]> } | ErrorResult
>;