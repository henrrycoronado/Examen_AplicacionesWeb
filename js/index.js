import { Router } from "./services/router.js";
import { SavedItemList } from "./services/SavedItemList.js";
import { HomePage } from "./components/HomePage.js";
import { SavedPage } from "./components/SavedPage.js";
import { FavoritePage } from "./components/FavoritePage.js";
import { SearchBarWeb } from "./components/SearchBarWeb.js";
import { SaveButtonWeb } from "./components/SaveButtonWeb.js";
import { CardComponent } from "./components/CardComponent.js";

globalThis.app = {};
globalThis.DOM = {};
const DOM = globalThis.DOM;

function renderList() {
  const container = DOM.todoList;
  const items = SavedItemList.getInstance().items;
  if (!container) return;

  container.innerHTML = '';
  for (const item of items) {
    const card = document.createElement('card-component');
    card.setAttribute('title', item.text);
    card.setAttribute('body', 'Contenido generado dinámicamente.');
    container.appendChild(card);
  }
}
globalThis.renderList = renderList;

document.addEventListener("DOMContentLoaded", () => {
  app.router = Router;
  app.router.init();

  DOM.searchContainer = document.getElementById("search-container");
  if (DOM.searchContainer) {
    DOM.searchContainer.appendChild(document.createElement('search-bar'));
  }
});
