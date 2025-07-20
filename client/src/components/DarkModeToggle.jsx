import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function DarkModeToggle() {
  // 1) Initialize state from localStorage (or system preference)
  const [dark, setDark] = useState(() =>
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  // 2) Whenever `dark` changes, add/remove class and persist
  useEffect(() => {
    const root = window.document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      root.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [dark]);

  // 3) Render a button to toggle
  return (
    <button
      aria-label="Toggle dark mode"
      onClick={() => setDark(prev => !prev)}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
    >
      {dark 
        ? <Sun className="w-5 h-5 text-yellow-500" />
        : <Moon className="w-5 h-5 text-gray-800" />
      }
    </button>
  );
}
