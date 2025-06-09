import { Router } from "./services/router.js";
import { ItemList } from "./services/ItemList.js";
import { CommandExecutor, Command, Commands } from "./services/Command.js";
import { LocalStorage } from "./services/localStorage.js";

import { SearchBarWeb } from "./components/SearchBarWeb.js";

import {HomePage} from "./components/HomePage.js";

globalThis.app = {};
app.router = Router;

function create_card(item){
  const template = document.getElementById("card-template");
  const clone = template.content.cloneNode(true);
  clone.querySelector(".card-title").textContent = item.text;
  clone.querySelector(".card-button-favorite").textContent = item.favorite? "eliminar de favorito" : "añadir de favorito";
  clone.querySelector(".card-button-delete").addEventListener("click", () => {
    const cmd = new Command(Commands.DELETE, item.text);
    CommandExecutor.execute(cmd);
  });
  clone.querySelector(".card-button-favorite").addEventListener("click", () => {
    const cmd = new Command(Commands.FAVORITE, item.text);
    CommandExecutor.execute(cmd);
  });
  return clone;
}

function renderList() {
    const list = ItemList.getInstance();
    const page = document.getElementById("container").firstElementChild;
    const shadow = page.shadowRoot;
    const container = shadow.getElementById("ListItemContainer");
    if(container.firstElementChild){
        container.firstElementChild.remove();
    }
    const ul = document.createElement("ul");
    const favorite = document.getElementById("favorite").checked;
    ul.classList.add("body_list");
    container.appendChild(ul);
    if(favorite){
        for (let item of list.getItems()) {
            if(item.favorite){
                let li = document.createElement("li");
                let card = create_card(item);
                li.appendChild(card);
                ul.appendChild(li);
            }
        }
        return;
    }
    for (let item of list.getItems()) {
        let li = document.createElement("li");
        let card = create_card(item);
        li.appendChild(card);
        ul.appendChild(li);
    }
}

window.addEventListener("DOMContentLoaded", () => {
    app.router.init();
    document.getElementById("search-container").appendChild(new SearchBarWeb());
    ItemList.getInstance().addObserver(renderList);

    document.getElementById("favorite").addEventListener("click", () => {
        renderList();
    });
    document.addEventListener("keydown", function (event) {
        if (event.ctrlKey && event.key === "k") {
            event.preventDefault();
            const cmd = new Command(Commands.FOCUS);
            CommandExecutor.execute(cmd);
        }
        if (event.key === "Enter") {
            event.preventDefault();
            const cmd = new Command(Commands.SEARCH);
            CommandExecutor.execute(cmd);
        }
    });
});


