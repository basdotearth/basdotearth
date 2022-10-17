import type { FC } from 'react';

import NextHead from 'next/head';

export type HeadMetaTag = {
  name: string;
  content: string;
}

interface HeadProps {
  title: string;
  description: string;
  meta?: HeadMetaTag[];
}

const Head: FC<HeadProps> = ({ title, description, meta = [] }) => (
  <NextHead>
    <title>Bas Klinkhamer • {title}</title>
    <meta name="description" content={description} />
    {meta.map(({ name, content }) => <meta key={name} name={name} content={content} />)}
  </NextHead>
);

export default Head;
