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
      className="truncate rounded border px-2 py-1 text-sm enabled:active:scale-95 disabled:border-0 disabled:opacity-50 sm:enabled:hover:bg-slate-800 sm:enabled:hover:text-slate-50">
      {children}
    </button>
  );
};

export default Button;
