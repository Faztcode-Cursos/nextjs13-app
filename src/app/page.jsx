import { User } from "@/components/User";
import "./global.css"

//* Esta funcion se ejecuta en el servidor al llamarla en el componente y es util para obtener la data de APIs
async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const { data } = await res.json();

  return data;
}

//* Cuando se hace un componente asincrono se le conoce como React Server Component
const IndexPage = async () => {
  const users = await fetchUsers();

  return (
    <div>
      <h1>Index Page</h1>

      <ul className="list-group">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default IndexPage;
