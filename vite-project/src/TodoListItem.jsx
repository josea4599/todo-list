import TodoListItem from './TodoListItem.jsx';

{todoList.map(todo => (
  <TodoListItem key={todo.id} todo={todo} />
))}