import type { FunctionComponent } from "react";

const Skeleton: FunctionComponent = () => {
  return (
    <div className="flex animate-pulse items-center gap-4 p-2 ">
      <div className="relative h-10 w-10 overflow-hidden rounded-full bg-slate-200"></div>
      <div>
        <p className="truncate font-bold">.......</p>
        <p className="text-xs opacity-50">miner@mail.com</p>
      </div>

      <span className="grow truncate text-right text-xs font-bold">
        <span className="opacity-50">Level:</span> ###
      </span>
    </div>
  );
};

export default Skeleton;
