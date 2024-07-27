
type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

export default async function Users() {

    await new Promise((resolve, reject) => setTimeout(resolve, 2000));

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users: User[] = await response.json();
    console.log('++++++++++++++++users', users);

    return (
        <div className="p-10">
            <div>
                <h1 className="font-bold">Users</h1>
                <ol>
                    {users.map(d => (
                        <li className="mb-10" key={d.id}>
                            <h3>{d.name}</h3>
                            <small>{d.username}</small>
                            <p>{d.email} | {d.phone}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}
