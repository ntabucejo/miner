import type { NextPage } from "next";
import Profile from "../../components/elements/profile";
import Layout from "../../components/layout";
import Leaderboard from "../../components/sections/leaderboard";
import type { User } from "../../functions/utilities/generate-users";
import { useEffect, useState } from "react";
import Banner from "../../components/sections/banner";
import Skeleton from "../../components/elements/profile/skeleton";

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
          {Array.from({ length: 50 }, (_, index) => (
            <Skeleton key={index} />
          ))}
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
