import { Loader2 } from "lucide-react";
import React from "react";

const Loadingpage = () => {
  return (
    <>
      <div className="fixed flex items-center justify-center inset-0 backdrop-blur-md z-30 fade-in">
        <Loader2 className="h-20 w-20 animate-spin" />
      </div>
    </>
  );
};

export default Loadingpage;
