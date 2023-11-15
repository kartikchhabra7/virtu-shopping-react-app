import { useHotkeys } from "react-hotkeys-hook";

const useKeyboardShortcut = (hotkey, callback) => {
  useHotkeys(hotkey, (event) => {
    event.preventDefault();
    callback();
  });
};

const handleLinkClick = (setIsNavbarVisible) => {
  setIsNavbarVisible(false);
};

const authenticationUrl =
  "https://in.linkedin.com/in/kartik-chhabra-65a2b822b?trk=people-guest_people_search-card";

  
export default handleLinkClick;
export { useKeyboardShortcut, authenticationUrl };
