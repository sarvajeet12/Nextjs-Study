export default async function UserList() {

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log(users);

    return (
        <div>
            <h1>Users List</h1>
            <ul className="todo">

                {users.map(user => (
                    <li key={user.id}>
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}