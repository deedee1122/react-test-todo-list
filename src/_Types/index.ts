export enum ThemeTypesEnum {
  DARK = "dark",
  LIGHT = "light",
}

export interface ISystemState {
  mode: TailwindThemeType;
}

export type TailwindThemeType = ThemeTypesEnum.DARK | ThemeTypesEnum.LIGHT;
