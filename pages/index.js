import { Fragment } from "react";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Info from "../components/Info/Info";
import Management from "../components/Management/ManageMent";
import Security from "../components/Security/Security";
import Comment from "../components/Comment/Comment";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <About />
      <Services />
      <Info />
      <Management />
      <Security />
      <Comment />
    </Fragment>
  );
}
