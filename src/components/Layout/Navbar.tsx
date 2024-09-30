import { useThemeSwitcherHook } from "../../_Hooks";
import { Button } from "../ui";
import { RxMoon } from "react-icons/rx";

export const Navbar = () => {
  const { toggleTheme } = useThemeSwitcherHook();

  return (
    <header id="navbar" className="flex justify-center items-center gap-3 my-5">
      <h1 className="text-2xl">Task Manager</h1>
      <Button onClick={toggleTheme} variant="ghost" size="icon">
        <RxMoon className="w-6 h-6" />
      </Button>
    </header>
  );
};
