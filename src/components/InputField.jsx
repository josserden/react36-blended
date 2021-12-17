import { Wrapper, Input, Button, Label } from "../App.styled";

export const InputField = ({ text, onChange, onClick }) => {
  return (
    <Label>
      Create Your Todo
      <Wrapper>
        <Input
          type="text"
          value={text}
          placeholder="Your message"
          onChange={(e) => onChange(e.target.value)}
        />
        <Button onClick={onClick}>Add Todo</Button>
      </Wrapper>
    </Label>
  );
};
