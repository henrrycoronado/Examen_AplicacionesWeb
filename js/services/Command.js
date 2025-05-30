import { SavedItem, SavedItemList } from "./SavedItemList.js";

export class Command {
    name;
    args;
    constructor(name, args) {
        this.name = name;
        this.args = args;
    }
}

export const Commands = {
    FOCUS: "focus",
    SAVE: "save",
};

export const CommandExecutor = {
    execute(command) {
        const savedList = SavedItemList.getInstance();
        switch (command.name) {
            case Commands.FOCUS:
                break;
            case Commands.SAVE:
                break;
        }
    },
};