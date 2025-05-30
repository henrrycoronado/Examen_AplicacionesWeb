import { observerMixim } from "./ObserverMixim.js";

export class SavedItem {
  constructor(text) {
    this.text = text;
  }
  equals(other) {
    return this.text == other.text;
  }
}

export class SavedItemList {
  #data = new Set();
  get items() {
    return this.#data;
  }

  static instance = null;
  static {
    this.instance = new SavedItemList();
  }

  static getInstance() {
    return this.instance;
  }

  constructor() {
    if (SavedItemList.instance) {
      throw new Error("use get instance");
    }
  }

  add(item) {
    const array = Array.from(this.#data);
    const itemExists = array.filter((t) => t.equals(item)).length > 0;
    if (!itemExists) {
      this.#data.add(item);
      this.notify();
    }
  }

  delete(text_todo) {
    const array = Array.from(this.#data);
    const itemToDelete = array.filter((t) => t.text == text_todo);
    this.#data.delete(itemToDelete[0]);
    this.notify();
  }

  find(text_todo) {
    const array = Array.from(this.#data);
    return array.find((t) => t.text == text_todo);
  }

  replaceList(list) {
    this.#data = list;
    this.notify();
  }
}

Object.assign(SavedItemList.prototype, observerMixim); //esta es la asignacion del metodo con mixim