 
import {Content1} from "@/components/dashboard/content1"
import {Content2} from "@/components/dashboard/content2"
import Searchbar from "@/components/dashboard/searchbar";
import {SidebarWithContent}from "@/components/dashboard/slidebar"
function Page() {
    return (
        <>
        <Searchbar />
        <SidebarWithContent/>
        </>
    );
}
export default Page;