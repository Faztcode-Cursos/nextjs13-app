import { User } from "@/components/User";

async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const { data } = await res.json();

  return data;
}

const UserPage = async ({ params: { id } }) => {
  const user = await getUser(id);

  return (
    <div>
      <h1> User Details</h1>
      <div className="border">
        <User user={user} />
      </div>
    </div>
  );
};

export default UserPage;
