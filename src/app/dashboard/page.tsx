
import { Content1 } from "@/components/dashboard/barchart"
import { Piechart } from "@/components/dashboard/piechart"
import Searchbar from "@/components/dashboard/searchbar";
import {SidebarWithContent}from "@/components/dashboard/sidebar"
function Page() {
    return (
        <>
            <Searchbar/>
            <SidebarWithContent/>
        </>
    );
}
export default Page;