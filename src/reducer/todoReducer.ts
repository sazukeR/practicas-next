export interface Task {
  id: number;
  title: string;
  description: string;
  done: boolean;
}

export interface Action {
  type: string;
  payload: any;
}

export const todoReducer = (
  initialState: Task[] = [],
  action: Action
): Task[] => {
  switch (action.type) {
    case '[TODO] Add todo':
      return [...initialState, action.payload];

    case '[TODO] Delete todo':
      return initialState.filter((task) => task.id !== action.payload);

    case '[TODO] Toggle todo':
      return initialState.map((task) => {
        if (task.id === action.payload) {
          return {
            ...task,
            done: !task.done,
          };
        }
        return task;
      });

    default:
      return initialState;
  }
};

/* export const initState = () => {
  const storedTodos = localStorage.getItem('todos');
  return storedTodos ? JSON.parse(storedTodos) : [];
};
 */
