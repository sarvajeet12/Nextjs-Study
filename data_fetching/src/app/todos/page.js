export default async function Todo() {


    // Simulating delay of 4 seconds
    const slowResponse = await fetch("https://procodrr.vercel.app/?sleep=4000");



    // Here fetch : it is not normal fetch , it is next js fetching added some extra features
    const response = await fetch(" https://jsonplaceholder.typicode.com/todos?_limit=10");

    const todos = await response.json();
    console.log(todos);

    return (
        <div>
            <h1>Todo</h1>
            <ul className="todo">

                {todos.map(todo => (
                    <li key={todo.id} className="todoList">
                        <input type="checkbox" checked={todo.completed} readOnly/>
                        <p>{todo.title}</p>
                        
                    </li>
                ))}

            </ul>
        </div>
    );
}