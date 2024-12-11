export default async function User({params}) {
    var url = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    if (url.ok) {
        const user = await url.json();
        return (
            <div>
                <h1>Usuario</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Usuario</th>
                            <th>Email</th>
                            <th>Telefono</th>
                            <th>Web</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key='{user.id}'>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }else{
        return (<p> Usuario no reconocido </p>);
    }
}