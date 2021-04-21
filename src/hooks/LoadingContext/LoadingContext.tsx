import { createContext, FC, useContext, useEffect, useState } from 'react';

import { ISplashContext, ISplashProvider } from './interfaces';

const SplashContext = createContext({} as ISplashContext);

const DEFAULT_LOADING_WAIT_TIME = 500;

export const SplashProvider: FC<ISplashProvider> = ({
  SplashScreen,
  children,
  initSplash = true,
}) => {
  const [isSplashScreenShowing, setSplashScreenShowing] = useState(initSplash);

  useEffect(() => {
    const timer = setTimeout(
      () => setSplashScreenShowing(false),
      DEFAULT_LOADING_WAIT_TIME,
    );

    return () => clearTimeout(timer);
  }, []);

  return (
    <SplashContext.Provider
      value={{ isSplashScreenShowing, setSplashScreenShowing }}
    >
      {isSplashScreenShowing && <SplashScreen />}
      {children}
    </SplashContext.Provider>
  );
};

export const useSplashScreen = (): ISplashContext => {
  return useContext(SplashContext);
};
