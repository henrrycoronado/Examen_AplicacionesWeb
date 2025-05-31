export class SaveButtonWeb extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <button id="crear" class="save-button">
                Crear elemento
            </button>
        `;
        this.addEventListener('click', this.handleClick);
    }

    handleClick() {
        this.dispatchEvent(new CustomEvent('save-clicked', {
            bubbles: true,
            composed: true
        }));
    }
}

customElements.define('save-button', SaveButtonWeb);
