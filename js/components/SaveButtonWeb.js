class SaveButtonWeb extends HTMLElement {
    constructor() {
        super();
        this.render();
    }
    render() {
        this.innerHTML = `
            <button class="save-button">
                Save
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
