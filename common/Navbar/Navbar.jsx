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
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

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

  const router = useRouter();
  const type = router.locale;
  const onChange = (event) => {
    const lng = event.target.value;
    router.push("/", "/", { locale: lng });
  };

  const languageSelector = useSelector((state) => state.language);

  const { languageData } = languageSelector;

  console.log(languageSelector);

  return (
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
              <Link href="/">
                {languageData.menu_item_about
                  ? languageData.menu_item_about
                  : ""}
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/">
                {languageData.menu_item_service
                  ? languageData.menu_item_service
                  : ""}
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/">
                {languageData.menu_item_features
                  ? languageData.menu_item_features
                  : ""}
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/">
                {languageData.menu_item_comment
                  ? languageData.menu_item_comment
                  : ""}
              </Link>
            </ListItem>
          </MenuList>
        </WrapperLogo>
        <WrapperButton>
          <Select items={languages} onChange={onChange} value={type} />
          <div className="mx-1">
            <Button radius="true" bgColor="#053EFF" color="#fff">
              <Link href="/contact">
                {languageData.menu_item_contact
                  ? languageData.menu_item_contact
                  : ""}
              </Link>
            </Button>
          </div>
          <div className="mx-1">
            <Button radius="true" bgColor="#fff" color="#053EFF">
              <Link href="/login">
                {languageData.login_label_button
                  ? languageData.login_label_button
                  : ""}
              </Link>
            </Button>
          </div>
        </WrapperButton>
      </Nav>
    </div>
  );
};
export default Navbar;
