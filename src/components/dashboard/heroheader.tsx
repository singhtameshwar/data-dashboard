import { FileText, ListFilter } from "lucide-react";

export default function Header() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center z-10 p-4 shadow-md space-y-4 lg:space-y-0">
      <div className="ml-4 text-left">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">Your Heading</h1>
        <p className="text-xs sm:text-sm lg:text-base text-gray-500">
          Your description goes here.
        </p>
      </div>
      <div className="flex flex-wrap gap-2 lg:gap-4 justify-end lg:justify-start lg:mr-28 w-full lg:w-auto">
        <button className="btn btn-neutral flex items-center gap-2">
          <ListFilter /> Button 1
        </button>
        <button className="btn btn-neutral flex items-center gap-2">
          <FileText /> Button 2
        </button>
      </div>
    </div>
  );
}
