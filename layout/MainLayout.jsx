import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { palletColor } from "../styles/theme";
import { ThemeProvider } from "styled-components";
import { setLanguage } from "../redux/action/language";
import Footer from "../common/Footer/Footer";
import Navbar from "../common/Navbar/Navbar";
import ar from "../public/locales/ar/common.json";
import fa from "../public/locales/fa/common.json";
import en from "../public/locales/en/common.json";
import { GlobalStyle } from "../styles/GlobalStyle";

const MainLayout = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const language = router.locale;
  const languageData = language === "en" ? en : language === "fa" ? fa : ar;

  useEffect(() => {
    if (language === "en") {
      document.body.style.direction = "ltr";
      dispatch(setLanguage(languageData));
    } else {
      document.body.style.direction = "rtl";
      dispatch(setLanguage(languageData));
    }
  }, [language, dispatch, languageData]);

  return (
    <div>
      <ThemeProvider theme={palletColor}>
        <GlobalStyle />
        {router.pathname === "/login" ||
        router.pathname === "/contact" ? null : (
          <Navbar />
        )}
        {children}
        {router.pathname === "/login" ||
        router.pathname === "/contact" ? null : (
          <Footer />
        )}
      </ThemeProvider>
    </div>
  );
};
export default MainLayout;
