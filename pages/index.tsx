import type { NextPage } from "next";
import Layout from "../components/layout";
import Banner from "../components/sections/banner";

const Home: NextPage = () => {
  return (
    <Layout>
      <Banner
        title="Data Fetching Overview"
        description="Data fetching in Next.js allows you to render your content in different ways, depending on your application's use case. These include pre-rendering with Server-side Rendering or Static Generation, and updating or creating content at runtime with Incremental Static Regeneration."
        link="https://nextjs.org/docs/basic-features/data-fetching/overview"
      />
    </Layout>
  );
};

export default Home;
