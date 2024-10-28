import { FileText, ListFilter } from "lucide-react";

export default function Header() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start z-10 p-4 shadow-md">
      <div className="ml-4 text-left">
        <h1 className="text-2xl lg:text-3xl font-bold">Your Heading</h1>
        <p className="text-sm lg:text-base text-gray-500">Your description goes here.</p>
      </div>
      <div className="flex space-x-4 mr-4">
        <button className="btn btn-neutral">
          <ListFilter /> Button 1
        </button>
        <button className="btn btn-neutral">
          <FileText /> Button 2
        </button>
      </div>
    </div>
  );
}
