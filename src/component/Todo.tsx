type TodoProps = {
    text:string;
    onDelete : () => void;
};

const Todo = ({text, onDelete}: TodoProps) => { //分割代入
    return <li>
        {text}
        <button onClick={onDelete}>削除</button>
    </li>;
}


export default Todo;
