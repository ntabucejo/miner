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

const StaticSiteGeneration: NextPage<Props> = ({ user }) => {
  return (
    <Layout>
      <Banner
        title="Static Site Generation"
        description="Static-site generation creates a number of static paths based on the data needed for the page. At build time, these many paths are rendered out into static pages, and served incredibly quickly to the client."
        link="https://nextjs.org/docs/basic-features/data-fetching/get-static-props"
      />
      <Leaderboard>
        <Profile user={user} mute />
      </Leaderboard>
    </Layout>
  );
};

export default StaticSiteGeneration;

export const getStaticPaths: GetStaticPaths = async () => {
  const users = await prisma.user.findMany();

  const paths = users.map((user) => ({
    params: { id: user.id },
  }));

  return {
    paths,
    fallback: false,
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
  };
};
