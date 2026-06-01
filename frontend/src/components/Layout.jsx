import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <div className="site-wrapper">
      <NavBar />
      <main className="content-wrap">{children}</main>
      <Footer />
    </div>
  );
}
