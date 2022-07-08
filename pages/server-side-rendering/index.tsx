import type { GetServerSideProps, NextPage } from "next";
import Profile from "../../components/elements/profile";
import Layout from "../../components/layout";
import Board from "../../components/sections/leaderboard";
import generateUsers from "../../functions/utilities/generate-users";
import type { User } from "../../functions/utilities/generate-users";

interface Props {
  users: User[];
}

const ServerSideRendering: NextPage<Props> = ({ users }) => {
  return (
    <Layout>
      <Board>
        {users.map((user) => (
          <Profile key={user.id} user={user} />
        ))}
      </Board>
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
