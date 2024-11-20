import { NextResponse } from "next/server";
import { WebPDFLoader } from "@langchain/community/document_loaders/web/pdf";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

const pdfUrl =
  "https://elated-llama-235.convex.cloud/api/storage/6b493148-ed6b-479c-8840-7a13dbe397d0";

const GET = async (req) => {
  const response = await fetch(pdfUrl);
  const data = await response.blob();
  const loader = new WebPDFLoader(data);
  const docs = await loader.load();

  let pdfTextContent = "";
  docs.forEach((d) => (pdfTextContent = pdfTextContent + d.pageContent));

  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 100,
    chunkOverlap: 20,
  });

  const output = await splitter.createDocuments([pdfTextContent]);

  let splitterList = [];
  output.forEach((doc) => splitterList.push(doc.pageContent));

  return NextResponse.json({ result: splitterList });
};

export { GET };
