import { bundleMDX } from 'mdx-bundler';
import { cwd } from 'process';
import { join } from 'path';
import matter from 'gray-matter';
import { readdir, readFile } from 'fs/promises';

import type { CollectedArray, ErrorResult, PageTypeContent } from '../types/mdx';

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

export const collectStaticContent = async <Meta>(
  contentType: staticContent,
): Promise<{ items: CollectedArray<Meta> } | ErrorResult> => {
  try {
    const files = await collectStaticContentFiles(contentType);
    const items: (Meta & { slug: string })[] = [];

    for (let file of files) {
      const path = join(staticContentPaths[contentType], file);
      const rawFile = await readFile(path);
      const content = matter(rawFile.toString());
      if (content.data) {
        items.push({
          ...content.data as Meta,
          slug: file.replace(/\.mdx?$/, ''),
        });
      }
    }

    return { items };
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
  const file = dirContents.find(file => new RegExp(`^${slug}.mdx?$`).test(file));

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
