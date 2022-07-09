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
        title="Server Side Rendering"
        description="Server-side rendering means using a server to generate HTML from JavaScript modules in response to a URL request."
        link="https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props"
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
