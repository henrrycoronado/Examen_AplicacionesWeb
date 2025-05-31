export const Commands = {
    ADD: 'add',
    DELETE: 'delete',
  };
  
export class Command {
    constructor(type, params = []) {
      this.type = type;
      this.params = params;
    }
  }
  
export  const CommandExecutor = {
    execute(command) {
      const list = SavedItemList.getInstance();
  
      switch (command.type) {
        case Commands.ADD: {
          const text = DOM.todoInput.value.trim();
          if (text) {
            list.add(new SavedItem(text));
            DOM.todoInput.value = '';
          }
          break;
        }
        case Commands.DELETE: {
          const text = command.params[0];
          list.delete(text);
          break;
        }
      }
    },
  };
  