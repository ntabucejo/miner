import type { FunctionComponent, ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
  isEnabled: boolean;
}

const Button: FunctionComponent<Props> = ({ children, onClick, isEnabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={!isEnabled}
      className="truncate rounded bg-slate-900 px-2 py-1 text-sm text-slate-50 active:opacity-80 disabled:opacity-50">
      {children}
    </button>
  );
};

export default Button;
