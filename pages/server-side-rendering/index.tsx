import type { GetServerSideProps, NextPage } from "next";
import Profile from "../../components/elements/profile";
import Layout from "../../components/layout";
import Leaderboard from "../../components/sections/leaderboard";
import generateUsers from "../../functions/utilities/generate-users";
import type { User } from "../../functions/utilities/generate-users";
import Banner from "../../components/sections/banner";

interface Props {
  users: User[];
}

const ServerSideRendering: NextPage<Props> = ({ users }) => {
  return (
    <Layout>
      <Banner
        title="Server Side Rendering"
        description="Server-side rendering means using a server to generate HTML from JavaScript modules in response to a URL request."
        link="https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props"
      />
      <Leaderboard>
        {users.map((user) => (
          <Profile key={user.id} user={user} />
        ))}
      </Leaderboard>
    </Layout>
  );
};

export default ServerSideRendering;

export const getServerSideProps: GetServerSideProps = async () => {
  const users = generateUsers();

  return {
    props: {
      users,
    },
  };
};
