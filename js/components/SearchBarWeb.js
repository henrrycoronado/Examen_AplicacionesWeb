export class SearchBarWeb extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = './css/style.css';
        const input = document.createElement('input');
        input.id = 'search';
        input.placeholder = 'Search';
        input.type = 'text';
        input.className="navbar-search";
        input.addEventListener('mouseover', () => {
            input.style.backgroundColor = '#FFFFF1';
        });
        input.addEventListener('mouseout', () => {
            input.style.backgroundColor = '#FFFFFF';
        });
        this.shadowRoot.appendChild(link);
        this.shadowRoot.appendChild(input);
    }
}

customElements.define('search-bar', SearchBarWeb);