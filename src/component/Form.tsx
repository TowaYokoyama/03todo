import {useState, FormEvent} from 'react'

type FormProps = {
  onAddTodo: (text : string) => void;
}

function Form  ({onAddTodo}: FormProps ) {
  const [text, setText] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAddTodo(text.trim());
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
      type="text"
      value={text}
      onChange={(e)=>setText(e.target.value)}
      placeholder="新しいTodoを追加"
      />
      <button type="submit">追加</button>
    </form>
  );
}

export default Form;

