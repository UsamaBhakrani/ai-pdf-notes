"use client";

import { useParams } from "next/navigation";
import WorkspaceHeader from "../components/WorkspaceHeader";
import TextEditor from "../components/TextEditor";
import PdfViewer from "../components/PdfViewer";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useEffect } from "react";

const Workspace = () => {
  const { fileId } = useParams();
  const fileInfo = useQuery(api.pdfStorage.getFileInfo, {
    fileId: fileId,
  });

  useEffect(() => {
    console.log(fileInfo);
  }, []);

  return (
    <div>
      <WorkspaceHeader />
      <div className="grid grid-cols-2 gap-5">
        <div className="">
          <TextEditor />
        </div>
        <div className="">
          <PdfViewer fileUrl={fileInfo?.fileUrl} />
        </div>
      </div>
    </div>
  );
};

export default Workspace;
