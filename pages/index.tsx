import type { NextPage } from "next";
import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <section>
        <h1 className="underline-offset-2 mb-2 text-lg font-semibold hover:underline">
          <a href="https://nextjs.org/docs/basic-features/data-fetching/overview">
            Data Fetching Overview
          </a>
        </h1>
        <p>
          {
            "Data fetching in Next.js allows you to render your content in different ways, depending on your application's use case. These include pre-rendering with Server-side Rendering or Static Generation, and updating or creating content at runtime with Incremental Static Regeneration."
          }
        </p>
      </section>
    </Layout>
  );
};

export default Home;
