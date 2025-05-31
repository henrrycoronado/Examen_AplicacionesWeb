export class SearchBarWeb extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const input = document.createElement('input');
        input.id = 'search-bar';
        input.placeholder = 'Search';
        input.type = 'text';
        input.style.cssText = `
            width: 100%;
            height: max-content;
            padding: 15px 10px;
            border-radius: 16px;
            justify-content: center;
            background-color:rgb(255, 255, 255);
            color: white;
            border: none;
        `;
        input.addEventListener('mouseover', () => {
            input.style.backgroundColor = '#FFFFF1';
        });
        input.addEventListener('mouseout', () => {
            input.style.backgroundColor = '#FFFFFF';
        });
        this.shadowRoot.appendChild(input);
    }
}

customElements.define('search-bar', SearchBarWeb);