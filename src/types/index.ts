export type TPlaygroundItem = {
  title: string;
  tags: string[];
  link: string;
};

export type TExperience = {
  start: string;
  end?: string;
  company: string;
  description: string;
  location: string;
  tags: string[];
};

export type TEducation = {
  title: string;
  byline?: string;
  start: string;
  end?: string;
};

export type BlogPostMeta = {
  title: string;
  seoTitle: string;
  abstract: string;
  isPublished: boolean;
  publishedOn: Date;
};

export type PlaygroundMeta = {
  title: string;
  seoTitle: string;
  tags: string[];
  isPublished: boolean;
  publishedOn: Date;
};