import { BrowserRouter } from 'react-router-dom';

import { Loading } from 'components/Loading';
import { SplashProvider, MyThemeProvider } from 'hooks';
import Routes from 'routes';
import GlobalStyles from 'styles/global';

const Bootstrap: React.FC = () => {
  return (
    <>
      <MyThemeProvider>
        <SplashProvider SplashScreen={Loading}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </SplashProvider>
      </MyThemeProvider>
      <GlobalStyles />
    </>
  );
};

export default Bootstrap;
