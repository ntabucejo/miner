import type { FunctionComponent, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Board: FunctionComponent<Props> = ({ children }) => {
  return (
    <section>
      <h1 className="mb-2 text-lg font-semibold">Leaderboard</h1>
      <div className="divide-y rounded border">{children}</div>
    </section>
  );
};

export default Board;
