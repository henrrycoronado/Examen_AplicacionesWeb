import { SavedItem, SavedItemList } from "./services/SavedItemList.js";
import { CommandExecutor, Command, Commands } from "./services/Command.js";
import { LocalStorage } from "./services/localstorage.js";

document.addEventListener("keydown", function (event) {
  if (event.key === "enter") {
      event.preventDefault();
      const cmd = new Command(Commands.SEARCH);
      CommandExecutor.execute(cmd);
  }
  if (event.ctrlKey && event.key === "K") {
    event.preventDefault();
    const cmd = new Command(Commands.FOCUS);
    CommandExecutor.execute(cmd);
  }
  if (event.ctrlKey && event.key === "F") {
    event.preventDefault();
    const cmd = new Command(Commands.FAVORITE);
    CommandExecutor.execute(cmd);
  }
});