const RSS = require('rss');
const { join } = require('path');
const matter = require('gray-matter');
const { cwd, stdout, stderr } = require('process');
const { readdir, readFile, writeFile } = require('fs/promises');

const collectStaticFiles = async (dirName) => {
  const dirContents = await readdir(dirName);
  return dirContents
    .filter(path => /\.mdx?$/.test(path));
};

const collectStaticContent = async (dirname) => {
  const files = await collectStaticFiles(dirname);
  const items = [];

  for (let file of files) {
    const path = join(dirname, file);
    const rawFile = await readFile(path);
    const content = matter(rawFile.toString(), { excerpt: true });
    if (content.data) {
      items.push({
        ...content.data,
        excerpt: content.data.abstract || content.excerpt,
        type: dirname.split('/').pop(),
        slug: file.replace(/\.mdx?$/, ''),
      });
    }
  }

  return items;
};

const collectRssItems = async (directories) => {
  const items = await Promise.all(directories.map(dir => {
    const target = join(cwd(), 'content', dir);
    return collectStaticContent(target);
  }));

  return items
    .flat()
    .filter(i => i.isPublished)
    .sort((a, b) => (new Date(a.publishedOn)).valueOf() - (new Date(b.publishedOn)).valueOf());
};

const createRssFeed = async () => {
  const baseUrl = 'https://bas.earth';
  const author = 'Bas Klinkhamer';

  const feed = new RSS({
    title: author,
    description: 'I am a Frontend Developer and upcoming Product Owner. This is my blog.',
    feed_url: `${baseUrl}/rss.xml`,
    site_url: baseUrl,
    copyright: `Copyright 2022 - Today: ${author}`,
    language: 'en-GB',
    pubDate: new Date().toISOString(),
  });

  const rssItems = await collectRssItems(['playground', 'posts']);
  rssItems.forEach(item => {
    feed.item({
      title: item.title,
      description: item.excerpt,
      url: `${baseUrl}/${item.type}/${item.slug}`,
      author,
      date: item.publishedOn,
      ...(item.tags && { categories: item.tags }),
    });
  });
  return feed.xml({ indent: true });
};

(async () => {
  try {
    stdout.write('Generating RSS Feed\n');

    const feedLocation = join(cwd(), 'public/rss.xml');
    const rssFeed = await createRssFeed();
    await writeFile(feedLocation, rssFeed, { encoding: 'utf-8' });

    stdout.write(`Generated RSS Feed at ${feedLocation}\n`);
  } catch(e) {
    stderr.write('An error occurred while generating RSS Feed:\n');
    stderr.write(e.toString());
  }
})();