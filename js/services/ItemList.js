import { observerMixim} from "./ObserverMixim.js";

export class Item {
  constructor(text) {
    this.text = text;
    this.favorite = false;
  }
  equals(other) {
    return this.text === other.text;
  }
  preference(){
    this.favorite = !this.favorite;
  }
}

export class ItemList {
  #items = new Set();
  #items_v = new Set();
  static instance = null;
  static{
    this.instance = new ItemList();
  }
  constructor(){
    if(this.instance){
      throw new Error("instancie con el constructor");
    }
  }
  static getInstance() {
    return ItemList.instance;
  }
  getItems() {
    return this.#items;
  }
  getItemsList(){
    if(Array.from(this.#items_v).length === 0){
      return this.#items;
    }
    return this.#items_v;
  }

  add(item) {
    const array = Array.from(this.#items);
    const exists = array.filter((t) => t.text === item).length > 0;
    if (!exists && item !== "") {
      this.#items.add(new Item(item));
      this.notify();
    }
  }

  delete(item) {
    const array = Array.from(this.#items);
    const itemToDelete = array.filter((t) => t.text === item);
    this.#items.delete(itemToDelete[0]);
    this.notify();
  }
  find(item) {
    if(item === ""){
        this.#items_v = new Set();
        this.notify();
    }
    const array = Array.from(this.#items);
    const resp = array.find((t) => t.text === item);
    if(resp){
        this.#items_v = new Set();
        this.#items_v.add(resp[0]);
        this.notify();
    }
}

  clear(){
    this.#items = new Set();
    this.notify();
  }

  preference(item){
    for (let element of this.#items) {
        if(element.text === item){
            element.preference();
            this.notify();
        }
    }
}
}

Object.assign(ItemList.prototype, observerMixim);
