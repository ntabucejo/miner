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
      <div className="min-h-screen pb-4 [&>*>div]:mx-auto [&>*>div]:max-w-xl [&>*>div]:p-2">
        <header className="sticky top-0 z-10 bg-slate-50 shadow">
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
