"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const User = ({ user }) => {
  const router = useRouter();
  const { id, first_name, last_name, email, avatar } = user;
  return (
    <li
      key={id}
      className="list-group-item list-group-item-action d-flex justify-content-between align-items-center px-5 py-3"
      onClick={() => router.push(`/users/${id}`)}
    >
      <Image
        className="object-fit-cover rounded-circle"
        src={avatar}
        width="200"
        height="200"
        alt={email}
      />
      <div>
        <h5>
          {id} - {first_name} {last_name}
        </h5>
        <p>{email}</p>
      </div>
    </li>
  );
};
