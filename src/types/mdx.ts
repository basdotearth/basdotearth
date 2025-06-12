export type ContentFilter<Meta> = (item: CollectedItem<Meta>) => boolean;
export type ContentSort<Meta> = (itemA: CollectedItem<Meta>, itemB: CollectedItem<Meta>) => number;

export type PageTypeContent<Meta> = {
  code: string;
  meta: Meta;
};

export type PageTypeMeta = {
  excerpt: string;
  slug: string;
};

export type CollectedItem<Meta> = Meta & PageTypeMeta;

export type CollectedResult<Meta> = {
  items: CollectedItem<Meta>[];
};
export type ErrorResult = { errorCode: 404 | 500 };

export type CombinedResult<Meta extends Record<string, unknown>, withError = true> = {
  [I in keyof Meta]: withError extends true ? CollectedResult<Meta[I]> | ErrorResult : CollectedResult<Meta[I]>;
};
