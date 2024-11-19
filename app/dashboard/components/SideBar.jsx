import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Layout, Shield } from "lucide-react";
import Image from "next/image";
import UploadPdfDialog from "./UploadPdfDialog";

const SideBar = () => {
  return (
    <div className="h-screen shadow-md p-7">
      <Image
        src={"/logo.svg"}
        width={100}
        height={100}
        alt="Lorem Ipsum Logo"
      />
      <div className="mt-10">
        <UploadPdfDialog>
          <Button className="w-full">+ Upload PDF</Button>
        </UploadPdfDialog>
        <div className="flex items-center gap-2 p-5 mt-5 rounded-lg cursor-pointer hover:bg-slate-100">
          <Layout />
          <h2 className="">Workspace</h2>
        </div>
        <div className="flex items-center gap-2 p-5 rounded-lg cursor-pointer hover:bg-slate-100">
          <Shield />
          <h2 className="">Upgrade</h2>
        </div>
      </div>
      <div className="absolute bottom-24 w-[80%]">
        <Progress value={33} />
        <div className="flex flex-col items-center justify-center">
          <p className="mt-1 text-sm">2 out of 5 Pdf Uploaded</p>
          <p className="mt-2 text-xs text-gray-400">
            Upgrade to Upload more PDF
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
