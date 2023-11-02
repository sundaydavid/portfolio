import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/navbar";
import Skill from "./components/Skills/Skill";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Works from "./components/works/works";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Skill />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
