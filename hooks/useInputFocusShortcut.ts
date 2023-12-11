import { useEffect } from 'react';

type KeyCallback = () => void;

export const useInputFocusShortcut = (callback: KeyCallback) => {
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      // ctrl + shift + i
      if (event.ctrlKey && event.shiftKey && event.key === 'I') {
        callback();
      }
    }

    window.addEventListener('keydown', handler);

    return () => {
      window.removeEventListener('keydown', handler);
    };
  }, []);
}
