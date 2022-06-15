import "./todo.css";

const Todo = () => {

    const [todoText, setTodoText] = useState("");

    const handleTextChange => (e) {
        let val= e.target.value;
        setTodoText(val);
    };
    
    return (
        <div className="todo-page">
            <h3>Shopping List</h3>


        </div>
    );
};