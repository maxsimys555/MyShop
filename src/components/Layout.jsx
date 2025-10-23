import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({children}) {
  return (
    <div>
      <Header />
      <main >
        <Outlet /> {/* здесь рендерятся страницы */}
      </main>
      <Footer />
    </div>
  );
}