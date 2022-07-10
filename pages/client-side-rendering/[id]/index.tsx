import type { NextPage } from "next";
import Profile from "../../../components/elements/profile";
import Layout from "../../../components/layout";
import type { User } from "../../../functions/utilities/generate-users";
import { useEffect, useState } from "react";
import Banner from "../../../components/sections/banner";
import { useRouter } from "next/router";
import Leaderboard from "../../../components/sections/leaderboard";
import Skeleton from "../../../components/elements/profile/skeleton";

const ClientSideRendering: NextPage = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`/api/users/${router.query.id}`);
      const data = await response.json();
      setUser(data);
    };

    setTimeout(fetchUser, 1000);
  }, [router.query]);

  if (!user) {
    return (
      <Layout>
        <Banner
          title="Client Side Rendering"
          description="Client-side rendering means if done at the page level, the data is fetched at runtime, and the content of the page is updated as the data changes. When used at the component level, the data is fetched at the time of the component mount, and the content of the component is updated as the data changes."
          link="https://nextjs.org/docs/basic-features/data-fetching/client-side"
        />
        <Leaderboard>
          <Skeleton />
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
        <Profile user={user} mute />
      </Leaderboard>
    </Layout>
  );
};

export default ClientSideRendering;
