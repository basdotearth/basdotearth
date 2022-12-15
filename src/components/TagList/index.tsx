import type { FC } from 'react';

import Icon, { EIcons } from 'components/Icon';

import styles from './TagList.module.css';

interface TagListProps {
  tags: string[];
}

const TagList: FC<TagListProps> = ({ tags }) => (
  <div className={styles.taglist}>
  { tags.map((tag, index) => (
      <div className={styles.tag} key={`tag--${index}`}>
        <Icon icon={EIcons.Tag} width={16} height={16} />
        {tag}
      </div>
    ))}
  </div>
);

export default TagList;