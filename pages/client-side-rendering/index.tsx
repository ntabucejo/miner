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
          description="Client-side rendering means if done at the page level, the data is fetched at runtime, and the content of the page is updated as the data changes. When used at the component level, the data is fetched at the time of the component mount, and the content of the component is updated as the data changes."
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
        description="Client-side rendering means if done at the page level, the data is fetched at runtime, and the content of the page is updated as the data changes. When used at the component level, the data is fetched at the time of the component mount, and the content of the component is updated as the data changes."
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
