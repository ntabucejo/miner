import Head from "next/head";
import { Fragment } from "react";
import type { FunctionComponent, ReactNode } from "react";
import Navbar from "../sections/navbar";

interface Props {
  children: ReactNode;
}

const Layout: FunctionComponent<Props> = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <title>Miner</title>
        <meta
          name="description"
          content="Different strategies to fetch data using reactjs and nextjs with miner"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen pb-4 [&>*>div]:mx-auto [&>*>div]:max-w-4xl [&>*>div]:p-2">
        <header className="sticky top-0 z-10 bg-slate-50">
          <div>
            <Navbar />
          </div>
        </header>
        <main>
          <div className="space-y-4">{children}</div>
        </main>
      </div>
    </Fragment>
  );
};

export default Layout;
