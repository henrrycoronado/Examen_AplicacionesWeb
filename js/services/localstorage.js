export default class LocalStorage {
    constructor() {
        this.storage = window.localStorage;
    }
    save(key, data) {
        try {
            const serializedData = JSON.stringify(data);
            this.storage.setItem(key, serializedData);
            return true;
        } catch (error) {
            console.error('Error al guardar en el local storage:', error);
            return false;
        }
    }
    get(key) {
        try {
            const item = this.storage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (error) {
            console.error('Error al obtener en el local storage:', error);
            return null;
        }
    }
    remove(key) {
        try {
            this.storage.removeItem(key);
            return true;
        } catch (error) {
            console.error('Error eliminando en el local storage:', error);
            return false;
        }
    }
    clear() {
        try {
            this.storage.clear();
            return true;
        } catch (error) {
            console.error('Error limpiando la local storage:', error);
            return false;
        }
    }
    exists(key) {
        return this.storage.getItem(key) !== null ? true : false;
    }
    getAllKeys() {
        return Object.keys(this.storage);
    }
}
