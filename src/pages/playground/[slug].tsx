import type { BlogPostMeta } from 'types/index';
import SinglePost from 'components/Pages/SinglePost';
import type { MDXStaticPageProps, MDXStaticPaths } from 'types/mdx';
import { collectStaticContentSlugs, getStaticContentBySlug } from 'helpers/mdx';

export const getStaticPaths: MDXStaticPaths = async () => {
  const slugs = await collectStaticContentSlugs('playground');
  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: MDXStaticPageProps<BlogPostMeta> = async ({ params }) => {
  const { slug } = params!;

  return {
    props: await getStaticContentBySlug<BlogPostMeta>({ slug, type: 'playground' }),
  };
};

export default SinglePost;
