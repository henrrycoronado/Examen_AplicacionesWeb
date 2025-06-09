import { ItemList } from "./ItemList.js";
import { LocalStorage } from "./localStorage.js";

export class Command {
    name;
    args;
    constructor(name, args){
        this.name = name;
        this.args = args;
    }
}

export const Commands = {
    ADD: "add",
    DELETE: "delete",
    CLEAR: "clear",
    FOCUS: "focus",
    SEARCH: "search",
    FAVORITE: "favorite"
}

export class CommandExecutor {
    static execute(cmd){
        const List = ItemList.getInstance();
        const containerSearch = document.querySelector("search-bar");
        const shadow = containerSearch.shadowRoot;
        const search = shadow.querySelector("#search");
        switch(cmd.name){
            case Commands.ADD:
                List.add(cmd.args);
                break;
            case Commands.DELETE:
                List.delete(cmd.args);
                break;
            case Commands.CLEAR:
                List.clear();
                break;
            case Commands.FOCUS:
                search.focus();
                break;
            case Commands.SEARCH:
                List.find(search.value.trim());
                break;
            case Commands.FAVORITE:
                List.preference(cmd.args);
                break;
        }
    }
}