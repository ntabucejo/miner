import Link from "next/link";
import type { FunctionComponent } from "react";
import useRoute from "../../../functions/hooks/use-route";
import Button from "../../elements/button";
import Path from "../../elements/path";

const Navbar: FunctionComponent = () => {
  const { isRouteActive: isISRActive } = useRoute(
    "/incremental-static-regeneration"
  );

  const { isAtRoute: isAtHome } = useRoute("/");

  const revalidateHandler = async () => {
    await fetch("/api/revalidate");
  };

  const regenerateUsersHandler = async () => {
    await fetch("/api/regenerate-users");
  };

  return (
    <nav className="space-y-1">
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
      <div className="flex items-center gap-4">
        <div className="flex gap-4">
          <Button onClick={regenerateUsersHandler} isEnabled={!isAtHome}>
            Regenerate Users
          </Button>
          <Button onClick={revalidateHandler} isEnabled={isISRActive}>
            Revalidate
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
