import { GetStaticPaths, GetStaticProps, NextPage } from 'next/types';

export type ErrorResult = { errorCode: 404 | 500 };

export type PageTypeContent<Meta> = {
  code: string;
  meta: Meta;
};

export type PageTypeSlug = {
  slug: string;
};

export type CollectedArray<Meta> = (Meta & { slug: string })[];

export type MDXStaticPage<Meta> = NextPage<PageTypeContent<Meta>>;
export type MDXOverviewPage<Meta> = NextPage<{items: CollectedArray<Meta> }>;
export type MDXStaticPageProps<Meta> = GetStaticProps<PageTypeContent<Meta> | ErrorResult, PageTypeSlug>;
export type MDXOverviewPageProps<Meta> = GetStaticProps<{ items: CollectedArray<Meta> } | ErrorResult, PageTypeSlug>;
export type MDXStaticPaths = GetStaticPaths<PageTypeSlug>;