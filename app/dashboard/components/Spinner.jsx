import { LoaderCircle } from "lucide-react";

const Spinner = () => {
  return (
    <LoaderCircle className="flex items-center justify-center w-12 h-12 mx-auto mr-2 animate-spin" />
  );
};

export default Spinner;
