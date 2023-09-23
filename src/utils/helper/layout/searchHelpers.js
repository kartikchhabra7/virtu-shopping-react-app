import { useHotkeys } from "react-hotkeys-hook";

const useKeyboardShortcut = (hotkey, callback) => {
  useHotkeys(hotkey, (event) => {
    event.preventDefault();
    callback();
  });
};

export { useKeyboardShortcut };
