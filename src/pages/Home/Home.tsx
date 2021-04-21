import { useTheme } from 'hooks/ThemeContext';

import { Container, Header } from './styles';

export const Home: React.FC = () => {
  const {
    toggle,
    themeState: { mode },
  } = useTheme();

  return (
    <Container>
      <Header>
        <input
          data-testid="input"
          type="checkbox"
          onClick={() => toggle()}
          defaultValue={mode}
          alt={mode}
        />
        <span>{mode}</span>
      </Header>
      <h1>Reference Architecture - ReactJS</h1>
      <p>A ReactJS + TypeScript structure.</p>
    </Container>
  );
};
