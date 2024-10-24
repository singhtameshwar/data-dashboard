import { FileText, ListFilter } from "lucide-react";

export default function Header() {
  return (
    <div className="py-4 px-4">
    <div className="flex flex-col lg:flex-row justify-between items-center p-4">
      <div className="mt-4 lg:mt-[30px] ml-4 lg:ml-[140px] text-center lg:text-left">
        <h1 className="text-2xl lg:text-3xl font-bold">Your Heading</h1>
        <p className="text-sm lg:text-base text-gray-500">Your description goes here.</p>
      </div>
      {/* rahul */}
      <div className="flex space-x-4 mt-4 lg:mt-[30px] mr-4 lg:mr-[50px]">
        <button className="btn btn-neutral"> <ListFilter />Button 1</button>
        <button className="btn btn-neutral"><FileText />Button 2</button>
      </div>
    </div>
    </div>
  );
}
