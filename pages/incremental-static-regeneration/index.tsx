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

const IncrementalStaticRegeneration: NextPage<Props> = ({ users }) => {
  return (
    <Layout>
      <Banner
        title="Incremental Static Regeneration"
        description="Incremental static regeneration enables you to use static-generation on a per-page basis, without needing to rebuild the entire site."
        link="https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration"
      />
      <Leaderboard>
        {users.map((user) => (
          <Profile key={user.id} user={user} />
        ))}
      </Leaderboard>
    </Layout>
  );
};

export default IncrementalStaticRegeneration;

export const getStaticProps: GetStaticProps = async () => {
  const users = await prisma.user.findMany();

  return {
    props: {
      users,
    },
    revalidate: 60,
  };
};
