import Link from "next/link";
import type { FunctionComponent } from "react";
import useRoute from "../../../functions/hooks/use-route";
import Path from "../../elements/path";

const Navbar: FunctionComponent = () => {
  const { isRouteActive: isISRActive } = useRoute(
    "/incremental-static-regeneration"
  );

  return (
    <nav>
      <div className="flex items-center gap-4">
        <Link href="/">
          <a className="cursor-pointer text-2xl font-bold">MINER</a>
        </Link>
        <ul className="flex gap-2 font-semibold">
          <Path url="/client-side-rendering">CSR</Path>
          <Path url="/server-side-rendering">SSR</Path>
          <Path url="/server-side-generation">SSG</Path>
          <Path url="/incremental-static-regeneration">
            {!isISRActive ? "ISR" : "ISR (60s)"}
          </Path>
        </ul>
      </div>
      <div className="flex items-center gap-4"></div>
    </nav>
  );
};

export default Navbar;
