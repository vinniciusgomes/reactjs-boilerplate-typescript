import { FC } from 'react';

export interface ISplashContext {
  isSplashScreenShowing: boolean;
  setSplashScreenShowing: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ISplashProvider {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  SplashScreen: FC<any>;
  initSplash?: boolean;
}
