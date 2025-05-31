"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import SunIcon from "../../assets/icons/SunIcon";
import MoonIcon from "../../assets/icons/MoonIcon";

export default function Theme() {
  const { theme, setTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);

  function toggleTheme() {
    return theme === "light" ? setTheme("dark") : setTheme("light");
  }

  useEffect(() => {
    // 确保默认主题始终是dark
    if (!theme || theme === "system") {
      setTheme("dark");
    }
    setHasMounted(true);
  }, [theme, setTheme]);

  if (!hasMounted)
    return (
      <span className="animate-pulse min-w-[28px] min-h-[28px] p-2 rounded-full dark:bg-zinc-800 bg-zinc-200 border dark:border-zinc-700 border-zinc-300"></span>
    );

  return (
    <button
      onClick={toggleTheme}
      className={`dark:bg-primary-bg bg-zinc-100 dark:text-primary-color text-zinc-500 border dark:border-zinc-800 border-zinc-200 rounded-full p-2 duration-300 transition-transform group: ${
        theme === "light" ? "-rotate-180" : "rotate-0"
      }`}
      aria-label="Toggle Theme"
    >
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
