import { Checkbox, TodoText, RemoveBtn } from "../App.styled";
import { useDispatch } from "react-redux";
import { removeTodo, handleTodoComplete } from "../redux/todo/sliceTodo";

export const TodoItem = ({ text, id, completed }) => {
  const dispatch = useDispatch();
  const removeTask = () => {
    console.log(id);
    dispatch(removeTodo({ id }));
  };
  const completeTask = () => {
    console.log(id);
    dispatch(handleTodoComplete({ id }));
  };
  return (
    <li>
      <Checkbox type="checkbox" checked={completed} onChange={completeTask} />
      <TodoText>{text}</TodoText>
      <RemoveBtn onClick={removeTask}>&times;</RemoveBtn>
    </li>
  );
};
