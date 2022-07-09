import Link from "next/link";
import type { FunctionComponent, ReactNode } from "react";
import useRoute from "../../../functions/hooks/use-route";

interface Props {
  children: ReactNode;
  url: string;
}

const Path: FunctionComponent<Props> = ({ children, url }) => {
  const { isRouteActive } = useRoute(url);

  return (
    <li
      className={`${
        isRouteActive ? "underline underline-offset-2" : "text-slate-500"
      } truncate hover:text-slate-800`}>
      <Link href={url}>{children}</Link>
    </li>
  );
};

export default Path;
