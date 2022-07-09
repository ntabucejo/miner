import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Profile from "../../../components/elements/profile";
import Layout from "../../../components/layout";
import type { User } from "../../../functions/utilities/generate-users";
import Banner from "../../../components/sections/banner";
import prisma from "../../../functions/utilities/prisma";
import Leaderboard from "../../../components/sections/leaderboard";

interface Props {
  user: User;
}

const IncrementalStaticRegeneration: NextPage<Props> = ({ user }) => {
  return (
    <Layout>
      <Banner
        title="Incremental Static Regeneration"
        description="Incremental static regeneration enables you to use static-generation on a per-page basis, without needing to rebuild the entire site."
        link="https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration"
      />
      <Leaderboard>
        <Profile user={user} mute />
      </Leaderboard>
    </Layout>
  );
};

export default IncrementalStaticRegeneration;

export const getStaticPaths: GetStaticPaths = async () => {
  const users = await prisma.user.findMany();

  const paths = users.map((user) => ({
    params: { id: user.id },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const user = await prisma.user.findUnique({
    where: { id: String(params!.id) },
  });

  return {
    props: {
      user,
    },
    revalidate: 60,
  };
};
