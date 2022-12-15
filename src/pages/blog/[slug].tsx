import SinglePost from 'components/Pages/SinglePost';
import type { BlogPostMeta } from 'types/index';
import type { MDXStaticPaths, MDXStaticPageProps } from 'types/mdx';
import { getStaticContentBySlug, collectStaticContentSlugs } from 'helpers/mdx';

export const getStaticPaths: MDXStaticPaths = async () => {
  const slugs = await collectStaticContentSlugs('posts');
  return {
    paths: slugs.map(slug => ({ params: { slug }})),
    fallback: false,
  };
};

export const getStaticProps: MDXStaticPageProps<BlogPostMeta> = async ({ params }) => {
  const { slug } = params!;
  
  return {
    props: await getStaticContentBySlug<BlogPostMeta>({ slug, type: 'posts' }),
  };
};

export default SinglePost;
