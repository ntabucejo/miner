import { FunctionComponent, useEffect, useState } from "react";

const Skeleton: FunctionComponent = () => {
  const [randomWidth, setRandomWidth] = useState({
    fullName: 0,
    email: 0,
  });

  useEffect(() => {
    setRandomWidth({
      fullName: Math.floor(Math.random() * (10 - 5)) + 5,
      email: Math.floor(Math.random() * (12 - 5)) + 5,
    });
  }, []);

  return (
    <div className="flex animate-pulse items-center gap-4 p-2 ">
      <div className="relative h-10 w-10 overflow-hidden rounded-full bg-slate-200"></div>
      <div className="grow space-y-2">
        <div
          style={{
            width: `${randomWidth.fullName}rem`,
          }}
          className="h-3 rounded-full bg-slate-300 font-bold"></div>
        <div
          style={{
            width: `${randomWidth.email}rem`,
          }}
          className="h-3 rounded-full bg-slate-300 opacity-50"></div>
      </div>

      <div className="h-3 w-14 rounded-full bg-slate-300 opacity-50"></div>
    </div>
  );
};

export default Skeleton;
