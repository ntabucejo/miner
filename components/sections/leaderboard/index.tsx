import type { FunctionComponent, ReactNode } from "react";
import useRoute from "../../../functions/hooks/use-route";
import Button from "../../elements/button";

interface Props {
  children: ReactNode;
}

const Leaderboard: FunctionComponent<Props> = ({ children }) => {
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
    <section>
      <div className="mb-2 flex items-center justify-between gap-4">
        <h1 className="text-lg font-semibold">Leaderboard</h1>
        <div className="flex gap-4">
          <Button onClick={revalidateHandler} isEnabled={isISRActive}>
            Revalidate
          </Button>
          <Button onClick={regenerateUsersHandler} isEnabled={!isAtHome}>
            Regenerate Users
          </Button>
        </div>
      </div>
      <div className="divide-y rounded border">{children}</div>
    </section>
  );
};

export default Leaderboard;
