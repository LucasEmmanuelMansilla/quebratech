import "./styles/globals.css";
import "./styles/styles.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Presentation from "./components/Presentation";
import ToStart from "./components/ToStart";
import ContactForm from "./components/ContactForm";

export default function Landing() {
  return (
    <main>
      <div className="bg-white overflow-x-hidden">
        <Header />
        <Banner />
        <Presentation />
        <ToStart />
        <ContactForm />
        <Footer />
      </div>
    </main>
  );
}
