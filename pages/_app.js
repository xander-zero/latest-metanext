import MainLayout from "../layout/MainLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/slider.css";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
