import { useState } from "react";
import Header from "#/components/Header";
import Services from "#/components/Services";
import Footer from "#/components/Footer";
import Banner from "#/components/Banner";

export default function Landing() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <main>
      <div className="bg-white">
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Banner menuOpen={menuOpen} />
        <Services />
        <Footer />
      </div>
    </main>
  );
}
