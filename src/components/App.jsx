import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Section, Container, Heading } from '../App.styled';
import { InputField } from './InputField';
import { addTodo } from '../redux/todo/sliceTodo';
import { TodoList } from './TodoList';

function App() {
  // const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ text }));
    setText('');
  };

  return (
    <Section>
      <Container>
        <Heading>Todo Redux Toolkit</Heading>
        <InputField text={text} onChange={setText} onClick={addTask} />
        <TodoList />
      </Container>
    </Section>
  );
}

export default App;
