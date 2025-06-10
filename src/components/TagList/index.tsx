import type { FC } from 'react';

import styles from './TagList.module.css';

interface TagListProps {
  tags: string[];
}

const TagList: FC<TagListProps> = ({ tags }) => (
  <div className={styles.taglist}>
    { tags.map((tag, index) => (
      <div className={styles.tag} key={`tag--${index}`}>
        {tag}
      </div>
    ))}
  </div>
);

export default TagList;
