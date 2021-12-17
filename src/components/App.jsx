import { useState } from 'react';
import {
  Section,
  Container,
  Heading,
  Wrapper,
  Label,
  Input,
  Button,
  RemoveBtn,
  TodoText,
  Checkbox,
} from '../App.styled';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false,
        },
      ]);
      setText('');
    }
  };

  const handleInput = (event) => {
    setText(event.target.value);
  };

  const removeTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const handleTodoComplete = (todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== todoId) return todo;

        return { ...todo, completed: !todo.completed };
      })
    );
  };

  return (
    <Section>
      <Container>
        <Heading>Todo Redux Toolkit</Heading>

        <Label>
          Create Your Todo
          <Wrapper>
            <Input
              type="text"
              value={text}
              placeholder="Your message"
              onChange={handleInput}
            />
            <Button onClick={addTodo}>Add Todo</Button>
          </Wrapper>
        </Label>

        <ul>
          {todos.map((todo) => {
            <li key={todo.id}>
              <Checkbox
                type="checkbox"
                checked={todo.completed}
                onChange={handleTodoComplete}
              />

              <TodoText>{todo.text}</TodoText>

              <RemoveBtn onClick={removeTodo}>&times;</RemoveBtn>
            </li>;
          })}
        </ul>
      </Container>
    </Section>
  );
}

export default App;
