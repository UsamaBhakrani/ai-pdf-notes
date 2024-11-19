"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { useState } from "react";
import Spinner from "./Spinner";
import { useUser } from "@clerk/nextjs";

const UploadPdfDialog = ({ children }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");

  const generateUploadUrl = useMutation(api.pdfStorage.generateUploadUrl);
  const addFileEntryToDb = useMutation(api.pdfStorage.addFileEntryToDb);
  const getFileUrl = useMutation(api.pdfStorage.getFileUrl);

  const { user } = useUser();

  const onFileSelect = (e) => {
    setFile(e.target.files[0]);
  };

  const onUpload = async () => {
    setLoading(true);

    try {
      //  Get a short-lived upload URL
      const postUrl = await generateUploadUrl();

      // POST the file to the URL
      const result = await fetch(postUrl, {
        method: "POST",
        headers: { "Content-Type": file?.type },
        body: file,
      });
      const { storageId } = await result.json();

      const fileId = crypto.randomUUID().toString();
      const fileUrl = await getFileUrl({ storageId: storageId });

      // Save the newly allocated storage id to the database
      await addFileEntryToDb({
        storageId,
        fileUrl,
        fileId,
        createdBy: user.primaryEmailAddress.emailAddress,
        fileName:
          fileName ??
          `Untitled File from ${user.primaryEmailAddress.emailAddress}`,
      });

      setLoading(false);
      setFile(null);
      setFileName("");
    } catch (error) {
      setLoading(false);
      setFile(false);
      setFileName("");
      console.log(error, "Error Uploading file");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload Pdf File</DialogTitle>
          <DialogDescription asChild>
            <div className="">
              <h2 className="mt-5">Select a file to Upload</h2>
              <div className="gap-2 p-3 border rounded-md">
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={(e) => onFileSelect(e)}
                />
              </div>
              <div className="mt-2">
                <label htmlFor="">File Name *</label>
                <Input
                  placeholder="File Name"
                  onChange={(e) => setFileName(e.target.value)}
                />
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <Button type="submit" onClick={onUpload}>
            {loading ? <Spinner /> : "Upload"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UploadPdfDialog;
