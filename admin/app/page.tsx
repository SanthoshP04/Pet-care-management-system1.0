import Image from "next/image";
import styles from "./page.module.css";
import { OurBlogsMain } from "@/Components/OurBlogs/OurBlogsMain";
import Wrapper from "@/Components/Wrapper/Wrapper";
import { Content } from "@/Components/Content/Content";
import { AllPets } from "./Pets/_components/AllPets/AllPets";






export default async function Home() {




  return (
  <div>
 <OurBlogsMain
 h6Text="Available Blogs"
 LinkText="AddNewBlogs"
 LinkTo="/Blogs"/>
   <Wrapper>
        <Content
        h6Text='All Pets' LinkText='View All Pets' LinkTo='/Pets'/>
<AllPets />
      </Wrapper>
  </div>
  );
}
