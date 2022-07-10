import type { GetServerSideProps, NextPage } from "next";
import Profile from "../../../components/elements/profile";
import Layout from "../../../components/layout";
import type { User } from "../../../functions/utilities/generate-users";
import Banner from "../../../components/sections/banner";
import prisma from "../../../functions/utilities/prisma";
import Leaderboard from "../../../components/sections/leaderboard";

interface Props {
  user: User;
}

const ServerSideRendering: NextPage<Props> = ({ user }) => {
  return (
    <Layout>
      <Banner
        title="Server Side Rendering"
        description="Server-side rendering is also known as dynamic rendering. In SSR the page is generated each time the server gets a request. Pages on which the data have to change for a particular type of request, those pages use SSR as data is not the same for every request and may vary with it."
        link="https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props"
      />
      <Leaderboard>
        <Profile user={user} mute />
      </Leaderboard>
    </Layout>
  );
};

export default ServerSideRendering;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const user = await prisma.user.findUnique({
    where: { id: String(query.id) },
  });

  return {
    props: {
      user,
    },
  };
};
