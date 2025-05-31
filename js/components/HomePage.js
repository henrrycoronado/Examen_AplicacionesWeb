import { SavedItemList } from "../services/SavedItemList.js";
import { Command } from "../services/Command.js";

export class HomePage extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="list">
                <div class="list-titulo">Lista de elementos - Gestion</div>
                <a class="list-input-container">
                    <input id="textInput" class="list-input" type="text" placeholder="nuevo texto"/>
                </a>
                <a class="list-btns-container">
                    <div id="btn1" class="list-btn-container"></div>
                    <div class="list-btn-container">
                        <button id="limpiar" class="list-btn">Reiniciar Lista</button>
                    </div>
                </a>
                <div class="list-content-container">
                    <ul id="listContent" class="list-content"></ul>
                </div>
            </div>
        `;

        const saveButton = document.createElement("save-button");
        this.querySelector("#btn1")?.appendChild(saveButton);

        globalThis.DOM.todoList = this.querySelector("#listContent");
        globalThis.DOM.todoInput = this.querySelector("#textInput");
        globalThis.DOM.addBtn = saveButton;

        globalThis.DOM.addBtn.addEventListener("click", () => {
            const cmd = new Command(Commands.ADD);
            CommandExecutor.execute(cmd);
        });

        renderList();
        SavedItemList.getInstance().addObserver(renderList);
    }
}
customElements.define("home-page", HomePage);
