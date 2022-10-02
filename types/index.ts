export type TBlogPost = {
  title: string;
  intro: string;
  link: string;
};

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
