import type { GetStaticProps, NextPage } from "next";
import Profile from "../../components/elements/profile";
import Layout from "../../components/layout";
import Leaderboard from "../../components/sections/leaderboard";
import type { User } from "../../functions/utilities/generate-users";
import Banner from "../../components/sections/banner";
import prisma from "../../functions/utilities/prisma";

interface Props {
  users: User[];
}

const ServerSideGeneration: NextPage<Props> = ({ users }) => {
  return (
    <Layout>
      <Banner
        title="Static Site Generation"
        description="Static-site generation creates a number of static paths based on the data needed for the page. At build time, these many paths are rendered out into static pages, and served incredibly quickly to the client."
        link="https://nextjs.org/docs/basic-features/data-fetching/get-static-props"
      />
      <Leaderboard>
        {users.map((user) => (
          <Profile key={user.id} user={user} />
        ))}
      </Leaderboard>
    </Layout>
  );
};

export default ServerSideGeneration;

export const getStaticProps: GetStaticProps = async () => {
  const users = await prisma.user.findMany();

  return {
    props: {
      users,
    },
  };
};
