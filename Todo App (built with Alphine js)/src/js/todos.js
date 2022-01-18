function todos() {
  return {
    todos: [
      {
        id: 1,
        title: 'Learn HTML',
        isComplete: false,
      },

      {
        id: 2,
        title: 'Learn CSS',
        isComplete: true,
      },

      {
        id: 3,
        title: 'Learn JS',
        isComplete: false,
      },
    ],
    todoTitle: '',
    todoId: 4,

    // Add todo to the todos array.
    addTodo() {
      if (this.todoTitle.trim() === '') {
        return; // return nothing if the input is empty.
      }

      // Add/Push new title to the todos array.
      this.todos.push({
        id: this.todoId,
        title: this.todoTitle,
        isComeplete: false,
      });

      this.todoId++;
      this.todoTitle = '';
    },

    // Remove todo from the todos array.
    deleteTodo(id) {
      // this.todos.splice(id - 1, 1); // One method to delete todo but you sit with the problem where keys and buttons dont match.
      this.todos = this.todos.filter((todo) => (todo.id != id ? todo : ''));
    },

    deleteAllTodo() {
      this.todos = [];
    },

    isOpen: false,
  };
}
