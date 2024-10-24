 
import {Content1} from "@/components/dashboard/content1"
import {Content2} from "@/components/dashboard/content2"
import Searchbar from "@/components/dashboard/searchbar";
import Header from "@/components/heroheader";
function Page() {
    return (
        <>
        <Searchbar />
        <Header />
        <Content1/>
        <Content2/>
        </>
    );
}
export default Page;