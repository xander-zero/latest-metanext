import Link from "next/link";
import Image from "next/image";
import HeaderTitle from "../../components/HeaderTitle/HeaderTitle";
import {
  ListItem,
  MenuList,
  Nav,
  NavbarContainer,
  WrapperButton,
  WrapperLogo,
} from "./navbarStyle";
import timebar from "../../public/assets/images/timebar.png";
import Select from "../Select/Select";
import Button from "../Button/Button";

const Navbar = () => {
  const languages = [
    {
      id: "1",
      label: "فارسی",
      value: "fa",
    },
    {
      id: "2",
      label: "English",
      value: "en",
    },
    {
      id: "3",
      label: "عربی",
      value: "ar",
    },
  ];

  return (
    <NavbarContainer>
      <div className="container">
        <Nav>
          <WrapperLogo>
            {/* <Image src={} /> */}
            <HeaderTitle weight="bold" size="24px">
              لـوگـو
            </HeaderTitle>
            <MenuList>
              <ListItem>
                <Image src={timebar} alt="timebar" layout="fixed" />
                <Link href="/">درباره ما</Link>
              </ListItem>
              <ListItem>
                <Link href="/">امکانات</Link>
              </ListItem>
              <ListItem>
                <Link href="/">ویژگی ها</Link>
              </ListItem>
              <ListItem>
                <Link href="/">نظرات مشتریان</Link>
              </ListItem>
            </MenuList>
          </WrapperLogo>
          <WrapperButton>
            <Select items={languages} />
            <div className="mx-2">
              <Button radius="true" bgColor="#053EFF" color="#fff">
                دریافت مشاوره
              </Button>
            </div>
            <div className="mx-2">
              <Button radius="true" bgColor="#fff" color="#053EFF">
                ورود یا ثبت نام
              </Button>
            </div>
          </WrapperButton>
        </Nav>
      </div>
    </NavbarContainer>
  );
};
export default Navbar;
