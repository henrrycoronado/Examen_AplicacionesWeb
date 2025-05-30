import { CommandExecutor, Command, Commands } from "./Command.js";
export class SearchBarWeb {
    constructor(){
        super();
        this.attachShadow({ mode: 'open'});
        const input = document.createElement('input');
        input.textContent = 'Search';
        input.style.cssText = `
            whidth: 100%;
            height: max-content;
            padding: 10px 10px;
            border-radius: 16px;
            justify-content: center;
        `;
        input.type = 'text';
        input.addEventListener('mouseover', () => {
            input.style.backgroundColor = '#45a049';
        });
        input.addEventListener('mouseout', () => {
            input.style.backgroundColor = '#4CAF50';
        });
        this.shadowRoot.appendChild(input);
    }
}

customElements.define('search-bar', SearchBarWeb);