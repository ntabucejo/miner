import type { NextPage } from "next";
import Profile from "../../components/elements/profile";
import Layout from "../../components/layout";
import Board from "../../components/sections/leaderboard";
import generateUsers from "../../functions/utilities/generate-users";
import type { User } from "../../functions/utilities/generate-users";
import { useEffect, useState } from "react";
import Image from "next/image";

const ClientSideRendering: NextPage = () => {
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    const getUsers = () => {
      const users = generateUsers();
      setUsers(users);
    };
    getUsers();
  }, []);

  if (!users) {
    return (
      <div className="grid h-screen place-items-center">
        <div className="relative h-10 w-10 animate-spin">
          <Image
            src="/loading.png"
            objectFit="contain"
            layout="fill"
            alt=""
            priority
          />
        </div>
      </div>
    );
  }

  return (
    <Layout>
      <Board>
        {users.map((user) => (
          <Profile key={user.id} user={user} />
        ))}
      </Board>
    </Layout>
  );
};

export default ClientSideRendering;
