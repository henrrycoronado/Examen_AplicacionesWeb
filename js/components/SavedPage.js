export class SavedPage extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="list">
            <div class="list-titulo">Lista de elementos - Guardado</div>
            <a class="list-input-container">
                <input id="textInput" class="list-input" type="text" placeholder="nuevo texto"/>
            </a>
            <a class="list-btns-container">
                <div id="btn1" class="list-btn-container">

                </div>
                <div class="list-btn-container">
                    <button id="limpiar" class="list-btn">Reiniciar Lista</button>
                </div>
            </a>
            <div class="list-content-container">
                <ul id="listContent" class="list-content">
                    
                </ul>
            </div>
        </div>
        `;
        this.querySelector("#btn1")?.appendChild(document.createElement("save-button"));
    }
}
customElements.define("saved-page", SavedPage);
