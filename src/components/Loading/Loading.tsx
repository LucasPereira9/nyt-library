import React from 'react';
import { Container, Dot } from './Loading.styles';

const Loading: React.FC = () => {
  return (
    <Container>
      <Dot delay="0s" />
      <Dot delay="0.2s" />
      <Dot delay="0.4s" />
    </Container>
  );
};

export default Loading;