export interface IThemeState {
  mode: 'dark' | 'light';
}

export interface IMyThemeContext {
  toggle(): void;
  themeState: IThemeState;
}
