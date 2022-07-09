import { ThemeProvider } from "styled-components";
import Footer from "../common/Footer/Footer";
import Navbar from "../common/Navbar/Navbar";
import { GlobalStyle } from "../styles/GlobalStyle";
import { palletColor } from "../styles/theme";

const MainLayout = ({ children }) => {
  return (
    <div>
      <ThemeProvider theme={palletColor}>
        <GlobalStyle />
        <Navbar />
        {children}
        <Footer />
      </ThemeProvider>
    </div>
  );
};
export default MainLayout;
