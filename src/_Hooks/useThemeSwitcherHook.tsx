import { useEffect } from "react";
import { useAppDispatch, useAppSelector, themeSwitch } from "../store";
import { ThemeTypesEnum } from "../_Types";

export const useThemeSwitcherHook = () => {
  const theme = useAppSelector((state) => state.system.mode);
  const dispatch = useAppDispatch();

  useEffect(() => {
    document.documentElement.classList.toggle(
      ThemeTypesEnum.DARK,
      theme === ThemeTypesEnum.DARK
    );
  }, [theme]);

  const toggleTheme = () => {
    dispatch(
      themeSwitch(
        theme === ThemeTypesEnum.LIGHT
          ? ThemeTypesEnum.DARK
          : ThemeTypesEnum.LIGHT
      )
    );
  };

  return { theme, toggleTheme };
};
