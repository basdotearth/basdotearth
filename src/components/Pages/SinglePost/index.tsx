import BlogContent from 'components/BlogContent';
import Footer from 'components/Footer';
import Head from 'components/Head';
import Header from 'components/Header';
import type { PageTypeContent } from 'types/mdx';
import TagList from 'components/TagList';
import type { BlogPostMeta, PlaygroundMeta } from 'types/index';

import styles from './SinglePost.module.css';

interface TimestampProps {
  publishedOn: Date;
  updatedOn?: Date;
}

const Timestamp = ({ publishedOn, updatedOn }: TimestampProps) => {
  const date = new Date(publishedOn);
  const tz: [string, { timeZone: string }] = ['nl-NL', { timeZone: 'CET' }];
  const update = updatedOn ? new Date(updatedOn) : null;
  return <>
    <p className={styles.published} key="published">
      Published {date.toLocaleDateString(...tz)} @ {date.toLocaleTimeString(...tz)}
    </p>

    { update && <p className={styles.published} key="updated">
      Last updated {update.toLocaleDateString(...tz)} @ {update.toLocaleTimeString(...tz)}
    </p> }
  </>;
};

type SinglePostProps = PageTypeContent<BlogPostMeta> | PageTypeContent<PlaygroundMeta>;

const SinglePost = ({ code, meta }: SinglePostProps) => {
  return <>
    <Head title={meta.title} description={meta.seoTitle} />
    <Header />
    <main className={styles.main}>
      <h1 className={styles.title}>{ meta.title }</h1>
      <div className={styles.timestamps}>
        <Timestamp {...meta} />
      </div>
      {'abstract' in meta && <p className="lead">{ meta.abstract }</p>}
      <div className={styles.content}>
        <BlogContent code={code} />
      </div>
      {'tags' in meta && <TagList tags={meta.tags} />}
    </main>
    <Footer />
  </>;
};

export default SinglePost;
