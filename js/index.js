import { SavedItem, SavedItemList } from "./services/SavedItemList.js";
import { CommandExecutor, Command, Commands } from "./services/Command.js";
import { LocalStorage } from "./services/localstorage.js";

document.addEventListener("keydown", function (event) {
  if (event.key === "enter") {
      event.preventDefault();
      const cmd = new Command(Commands.FOCUS);
      CommandExecutor.execute(cmd);
  }
  if (event.ctrlKey && event.key === "k") {
    event.preventDefault();
    const cmd = new Command(Commands.FOCUS);
    CommandExecutor.execute(cmd);
  }
  if (event.key === "enter") {
    event.preventDefault();
    const cmd = new Command(Commands.FOCUS);
    CommandExecutor.execute(cmd);
  }
});