import { bundleMDX } from 'mdx-bundler';
import { cwd } from 'node:process';
import { join } from 'node:path';
import matter from 'gray-matter';
import { readFile, readdir } from 'node:fs/promises';

import type {
  CollectedItem,
  CollectedResult,
  ContentFilter,
  ContentSort,
  ErrorResult,
  PageTypeContent,
} from 'types/mdx';

type staticContent = 'posts' | 'playground' | 'resumeText' | 'resumeExperience' | 'resumeEducation';

const staticContentPaths: Record<staticContent, string> = {
  posts: join(cwd(), 'content/posts'),
  playground: join(cwd(), 'content/playground'),
  resumeText: join(cwd(), 'content/resume/text'),
  resumeExperience: join(cwd(), 'content/resume/experience'),
  resumeEducation: join(cwd(), 'content/resume/education'),
};

export const collectStaticContentFiles = async (contentType: staticContent): Promise<string[]> => {
  const dirContents = await readdir(staticContentPaths[contentType]);
  return dirContents
    .filter(path => /\.mdx?$/.test(path));
};

export const collectStaticContentSlugs = async (contentType: staticContent): Promise<string[]> => {
  const files = await collectStaticContentFiles(contentType);
  return files.map(path => path.replace(/\.mdx?$/, ''));
};

interface CollectStaticContentProps<Meta> {
  type: staticContent,
  filter?: ContentFilter<Meta>,
  sort?: ContentSort<Meta>,
}

export const collectStaticContent = async <Meta>({
  type,
  filter,
  sort,
}: CollectStaticContentProps<Meta>): Promise<CollectedResult<Meta> | ErrorResult> => {
  try {
    const files = await collectStaticContentFiles(type);
    const items: CollectedItem<Meta>[] = [];

    for (const file of files) {
      const path = join(staticContentPaths[type], file);
      const rawFile = await readFile(path);
      const content = matter(rawFile.toString(), { excerpt: true });
      if (content.data) {
        items.push({
          ...content.data as Meta,
          excerpt: content.excerpt || '',
          slug: file.replace(/\.mdx?$/, ''),
        });
      }
    }

    const defaultFilter = (item: CollectedItem<Meta>) => item;
    const defaultSort = (_a: CollectedItem<Meta>, _b: CollectedItem<Meta>) => 1;

    return {
      items: items
        .filter(filter || defaultFilter)
        .sort(sort || defaultSort),
    };
  } catch(e) {
    return { errorCode: 500 };
  }
};

interface GetStaticContentBySlugParams {
  slug: string;
  type: staticContent;
}

export const getStaticContentBySlug = async <Meta>({
  slug,
  type,
}: GetStaticContentBySlugParams): Promise<PageTypeContent<Meta> | ErrorResult> => {
  const dirContents = await readdir(staticContentPaths[type]);
  const file = dirContents.find(item => new RegExp(`^${slug}.mdx?$`).test(item));

  if (file) {
    try {
      const path = join(staticContentPaths[type], file);
      const rawFile = await readFile(path);
      const { code, frontmatter } = await bundleMDX({
        source: rawFile.toString(),
      });

      return {
        code,
        meta: frontmatter as Meta,
      };
    } catch (e) {
      return { errorCode: 500 };
    }
  }

  return { errorCode: 404 };
};
