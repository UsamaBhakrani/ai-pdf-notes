import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

const WorkspaceHeader = () => {
  return (
    <div className="flex justify-between p-4 shadow-md">
      <Image src={"/logo.svg"} alt="logo" width={140} height={100} />
      <UserButton />
    </div>
  );
};

export default WorkspaceHeader;
