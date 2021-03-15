import React, { memo } from 'react';

import { Container } from './styles';

const Loading: React.FC = () => {
  return (
    <Container>
      <span>Splash Screen</span>
    </Container>
  );
};

export default memo(Loading);
