import { useState } from "react";
import Topbar from "./homepage/TopBar";
import SearchBar from "./homepage/SearchBar";
import Footer from "./homepage/footer";
import FooterBottom from "./homepage/FooterBottom";
function Layout({ children }) {
  const [showTopBar, setShowTopBar] = useState(true);

  return (
    <>
      {showTopBar && <Topbar onClose={() => setShowTopBar(false)} />}
      <SearchBar topOffset={showTopBar ? 40 : 0} />
      <div style={{ minHeight: "100vh" }}>{children}</div>
      <FooterBottom/>
      <Footer/>
      
    </>
  );
}

export default Layout;