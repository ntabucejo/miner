import type { NextPage } from "next";
import Profile from "../../components/elements/profile";
import Layout from "../../components/layout";
import Leaderboard from "../../components/sections/leaderboard";
import type { User } from "../../functions/utilities/generate-users";
import { useEffect, useState } from "react";
import Image from "next/image";
import Banner from "../../components/sections/banner";

const ClientSideRendering: NextPage = () => {
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/api/users");
      const data = await response.json();
      setUsers(data);
    };

    setTimeout(fetchUsers, 1000);
  }, []);

  if (!users) {
    return (
      <Layout>
        <Banner
          title="Client Side Rendering"
          description="Client-side rendering means that a website's JavaScript is rendered in your browser, rather than on the website's server."
          link="https://nextjs.org/docs/basic-features/data-fetching/client-side"
        />
        <Leaderboard>
          <div className="grid h-[50vh] place-items-center">
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
        </Leaderboard>
      </Layout>
    );
  }

  return (
    <Layout>
      <Banner
        title="Client Side Rendering"
        description="Client-side rendering means that a website's JavaScript is rendered in your browser, rather than on the website's server."
        link="https://nextjs.org/docs/basic-features/data-fetching/client-side"
      />
      <Leaderboard>
        {users.map((user) => (
          <Profile key={user.id} user={user} />
        ))}
      </Leaderboard>
    </Layout>
  );
};

export default ClientSideRendering;
