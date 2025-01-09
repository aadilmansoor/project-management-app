import { User } from "@/state/api";
import Image from "next/image";

type Props = {
  user: User;
};

const UserCard = ({ user }: Props) => {
  return (
    <div className="flex items-center rounded border p-4 shadow">
      {user.profilePictureUrl && (
        <Image
          src={`https://pm-s3-imagez.s3.eu-north-1.amazonaws.com/${user.profilePictureUrl}`}
          alt="profile picture"
          height={32}
          width={32}
          className="rounded-full"
        />
      )}
      <div>
        <h3>{user.username}</h3>
        <p>{user.email}</p>
      </div>
    </div>
  );
};
export default UserCard;
