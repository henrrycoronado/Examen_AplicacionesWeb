import { observerMixim} from "./ObserverMixim.js";

export class SavedItem {
  constructor(text) {
    this.text = text;
  }
  equals(other) {
    return this.text === other.text;
  }
}

export class SavedItemList {
  static instance = null;
  #items = [];

  static getInstance() {
    if (!SavedItemList.instance) {
      SavedItemList.instance = new SavedItemList();
    }
    return SavedItemList.instance;
  }

  get items() {
    return this.#items;
  }

  add(item) {
    const exists = this.#items.some((t) => t.equals(item));
    if (!exists) {
      this.#items.push(item);
      this.notify();
    }
  }

  delete(text) {
    this.#items = this.#items.filter((t) => t.text !== text);
    this.notify();
  }

  replaceList(list) {
    this.#items = list;
    this.notify();
  }
}

Object.assign(SavedItemList.prototype, observerMixim);
