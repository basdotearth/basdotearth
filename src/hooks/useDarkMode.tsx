import { Dispatch, useEffect, useState } from 'react';

const useDarkMode = (): [boolean, Dispatch<boolean>] => {
  const [darkMode, setDarkMode] = useState(false);
  const [initial, setInitial] = useState(true);

  useEffect(() => {
    const stored = window.localStorage.getItem('darkMode');
    const current = stored !== null ? JSON.parse(stored) : false;
    setDarkMode(current);
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
