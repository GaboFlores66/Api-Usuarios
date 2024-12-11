import axios from "axios";
import Link from 'next/link';

async function usuariosAPI() {
    const url="https://jsonplaceholder.typicode.com/users";
    const users = await axios.get(url);
    return users.data;
}

export default async function Usuarios() {
    var users=await usuariosAPI();
    return (
        <div>
            <h1>Usuarios</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Usuario</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => (
                            <tr key="{user.id}">
                                <td>{user.id}</td>
                                <td>
                                    <Link href={`/users/${user.id}`}>{user.name}</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}