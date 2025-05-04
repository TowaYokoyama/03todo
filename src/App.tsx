import {CSSProperties, useState} from 'react';
import Form from './component/Form';
import List from './component/List';


function App () {
  const [todos, setTodos] = useState<string[]>([]);

  const handleAddTodo = (text:string) => {
    setTodos ((prevTodos)=> [...prevTodos, text]);
  };

  const handleDeleteTodo = (index:number) => {
    setTodos ((prev) => prev.filter((_, i)=> i !== index));
  };

  return (
    <main style={styles.container}>
      <h1 style={styles.heading}>Todoアプリ</h1>
      <Form onAddTodo={handleAddTodo}  />
      <List todos={todos} onDeleteTodo={handleDeleteTodo} />
    </main>
  );
}

const styles: {[key: string]: CSSProperties} = {
  container: {
    maxWidth:"600px",
    margin:"0 auto",
    padding: "1rem",
    fontFamily: "sans-serif",
  },
  heading:{
    textAlign:"center",
  },
};
export default App;
