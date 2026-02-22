import Navbar from "./Navbar";
import Footer from "./Footer";
import Background from "./Background";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen text-white">
      <Background />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
