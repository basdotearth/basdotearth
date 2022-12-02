export type ExperienceMeta = {
  start: string;
  end?: string;
  company: string;
  location: string;
  tags: string[];
};

export type EducationMeta = {
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
  updatedOn?: Date;
};

export type PlaygroundMeta = {
  title: string;
  seoTitle: string;
  tags: string[];
  isPublished: boolean;
  publishedOn: Date;
  updatedOn?: Date;
};