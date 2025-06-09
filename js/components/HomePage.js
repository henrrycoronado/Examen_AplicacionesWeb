import { Command, Commands, CommandExecutor } from "../services/Command.js";

export class HomePage extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
        const template = document.getElementById("home-page");
        const clone = template.content.cloneNode(true);
        const inputCard = clone.querySelector("#input_card");
        const buttonClear = clone.querySelector("#button_card-clear");
        const buttonAdd = clone.querySelector("#button_card-add");
        const buttonSave = clone.querySelector("#button_card-save");
        buttonSave.addEventListener("click", () => {
            const cmd = new Command(Commands.SAVE_PRJ);
            CommandExecutor.execute(cmd);
            inputCard.value = ""; 
        })
        buttonAdd.addEventListener("click", () => {
            const cmd = new Command(Commands.ADD, inputCard.value.trim());
            CommandExecutor.execute(cmd);
            inputCard.value = "";
        })
        buttonClear.addEventListener("click", () => {
            const cmd = new Command(Commands.CLEAR);
            CommandExecutor.execute(cmd);
            inputCard.value = "";
        })
        this.shadowRoot.appendChild(clone);
    }

  connectedCallback() {
      
  }
}
customElements.define("home-page", HomePage);
