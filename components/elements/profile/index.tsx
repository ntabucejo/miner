import type { FunctionComponent } from "react";
import type { User } from "../../../functions/utilities/generate-users";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  user: User;
  mute?: boolean;
}

const Profile: FunctionComponent<Props> = ({ user, mute = false }) => {
  const router = useRouter();

  return (
    <Link href={mute ? `${router.asPath}` : `${router.pathname}/${user.id}`}>
      <div className="flex cursor-pointer items-center gap-4 p-2 hover:bg-slate-200 ">
        <div className="relative h-10 w-10 overflow-hidden rounded-full">
          <Image
            src={user.image}
            objectFit="cover"
            layout="fill"
            alt={user.lastName}
          />
        </div>
        <div>
          <p className="truncate font-bold">{`${user.firstName} ${user.lastName}`}</p>
          <p className="text-xs opacity-50">{user.email}</p>
        </div>

        <span className="grow text-right text-xs font-bold">
          <span className="opacity-50">Level:</span>{" "}
          {`00${user.level}`.slice(-3)}
        </span>
      </div>
    </Link>
  );
};

export default Profile;
