import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (theme == "system") {
      setTheme("dark");
    }
  }, []);

  if (!mounted) return null;

  // console.log(theme)

  return (
    <div
      className="fixed flex justify-center items-center p-2 right-4 bottom-4 rounded-xl border-dark border font-bold cursor-pointer duration-500 bg-[#00000038] backdrop-blur-md z-50 text-text_light dark:text-white"
      onClick={() => setTheme(theme == "light" ? "dark" : "light")}
    >
      {theme == "light" ? (
        <BsMoon size={23} className="shadow-xl" title="Change to light theme" />
      ) : (
        <BsSun size={23} className="shadow-xl" title="Change to dark theme" />
      )}
    </div>
  );
};

export default ThemeToggler;
