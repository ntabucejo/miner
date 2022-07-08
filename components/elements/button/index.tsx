import type { FunctionComponent, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Button: FunctionComponent<Props> = ({ children }) => {
  const handler = async () => {
    await fetch("/api/revalidate");
  };

  return (
    <button
      onClick={handler}
      className="rounded bg-slate-900 px-2 py-1 text-slate-50 active:opacity-80">
      {children}
    </button>
  );
};

export default Button;
