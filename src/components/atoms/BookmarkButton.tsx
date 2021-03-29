import React, { FC, useState, memo } from 'react';
import { BsBookmarkFill } from 'react-icons/bs';

import Container from './styles';

const BookmarkButton: FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <Container.BookmarkButton
      active={isActive}
      onClick={() => setIsActive(!isActive)}
    >
      <BsBookmarkFill size="1.25rem" />
    </Container.BookmarkButton>
  );
};

export default memo(BookmarkButton);
