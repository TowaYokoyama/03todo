import Todo from "./todo";

type ListProps = { //このコンポーネントが受け取るpropsの型の定義
    todos: string[];
    onDeleteTodo : (index: number) => void;
};

const List =({todos, onDeleteTodo}: ListProps) => { //型定義済み,propsの受け取り,
    return (
        <ul>
            {todos.map((todo,index) => ( //一つのtodo文字列,配列のインデックス,配列の要素を変換して，それぞれtodoコンポーネントとして描画
                <Todo key={index} 
                text={todo}
                onDelete={()=> onDeleteTodo(index)}
                />//配列にはkey、
            ))}
        </ul>
    )
}

export default List;
