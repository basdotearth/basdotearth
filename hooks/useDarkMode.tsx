import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [initial, setInitial] = useState(true);

  useEffect(() => {
    const query = '(prefers-color-scheme: dark)';
    const stored = window.localStorage.getItem('darkMode');
    const current = stored !== null ? JSON.parse(stored) : window.matchMedia(query).matches;
    setDarkMode(current);

    const listener = (event: MediaQueryListEvent) => setDarkMode(event.matches);
    window.matchMedia(query).addEventListener('change', listener);

    return window.matchMedia(query).removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    if (!initial) {
      window.document.body.classList.toggle('dark', darkMode);
      window.localStorage.setItem('darkMode', JSON.stringify(darkMode));
    } else {
      setInitial(false);
    }
  }, [darkMode, initial]);

  return [darkMode, setDarkMode];
};

export default useDarkMode;
