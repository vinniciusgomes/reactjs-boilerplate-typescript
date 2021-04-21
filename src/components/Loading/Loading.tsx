import { memo } from 'react';

import { Container } from './styles';

export const Loading: React.FC = memo(() => {
  return (
    <Container>
      <span>Splash Screen</span>
    </Container>
  );
});
