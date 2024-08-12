'use client';

import { /* initState, */ Task, todoReducer } from '@/reducer/todoReducer';
import { useEffect, useReducer } from 'react';

const initialState: Task[] = [
  {
    id: new Date().getTime(),
    title: 'tarea 1',
    description: 'realizar tarea 1',
    done: true,
  },
  {
    id: new Date().getTime() * 3,
    title: 'tarea 2',
    description: 'realizar tarea 2',
    done: false,
  },
];

const TodoPage = () => {
  const [todos, dispatch] = useReducer(
    todoReducer,
    initialState /* initState */
  );

  /*   useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]); */

  const onNewTask = (task: Task) => {
    const action = {
      type: '[TODO] Add todo',
      payload: task,
    };

    dispatch(action);
  };

  console.log(todos, 'rr');

  return (
    <div className="flex flex-col items-center m-auto mt-6 w-full max-w-3xl p-4 bg-slate-400">
      <p>rr</p>
      <input type="text" className="flex p-1 bg-slate-500 w-4/5 mb-4" />

      {todos.map((task) => (
        <div key={task.id} className="flex items-center w-full justify-around">
          <input type="checkbox" checked={task.done} name="done" id="" />

          <p>{task.description}</p>

          <div className="buttons">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Editar
            </button>

            <button
              type="button"
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default TodoPage;
