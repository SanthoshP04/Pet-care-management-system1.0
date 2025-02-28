

import styles from "./page.module.css";

import{ MainBg} from "@/Components/MainBg/MainBg";
export const metadata={
  title:"Find Your Friend"
}
export default function Home() {
  return (
    <div> 
  <MainBg
  ImgUrl="/home12.jpeg"
  ImgUrlAlt="home12"
  h6text="Find Your Farry Friend Today"/>
  
   <MainBg
  ImgUrl="/landing page 2.jpg"
  ImgUrlAlt="landing page 2"
  h6text="where happy"
  />
 
</div>
  );
}