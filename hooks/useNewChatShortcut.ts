import { useEffect } from 'react';

type KeyCallback = () => void;

export const useNewChatShortcut = (callback: KeyCallback) => {
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      // ctrl + shift + n
      if (event.ctrlKey && event.shiftKey && event.key === 'N') {
        callback();
        document.getElementById('chat-input')?.focus();
      }
    }

    window.addEventListener('keydown', handler);

    return () => {
      window.removeEventListener('keydown', handler);
    };
  }, []);
}
