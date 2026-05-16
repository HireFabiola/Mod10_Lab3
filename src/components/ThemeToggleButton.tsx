import { useTheme } from "./ThemeContext";

export function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-1 rounded bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none"
    >
      {theme === "light" ? "Dark" : "Light"}
    </button>
  );
}