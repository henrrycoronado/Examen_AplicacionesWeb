export class CardComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.render();
    }
  
    static get observedAttributes() {
      return ['title', 'body'];
    }
  
    attributeChangedCallback() {
      this.render();
    }
  
    render() {
      this.shadowRoot.innerHTML = '';
  
      const card = document.createElement('div');
      card.className = 'card';
      card.style.cssText = `
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        padding: 16px;
        width: 300px;
        margin-bottom: 10px;
      `;
  
      const title = document.createElement('h2');
      title.textContent = this.getAttribute('title') || 'Sin título';
  
      const body = document.createElement('p');
      body.textContent = this.getAttribute('body') || '';
  
      const delBtn = document.createElement('button');
      delBtn.textContent = 'Eliminar';
      delBtn.addEventListener('click', () => {
        const cmd = new Command(Commands.DELETE, [this.getAttribute('title')]);
        CommandExecutor.execute(cmd);
      });
  
      card.appendChild(title);
      card.appendChild(body);
      card.appendChild(delBtn);
      this.shadowRoot.appendChild(card);
    }
  }
  
  customElements.define('card-component', CardComponent);
  