import { Navbar } from "./components/Navbar";
import { ProjectSection } from "./sections/ProjectSection";
import { TopBannerSection } from "./sections/TopBannerSection";
import  Abilities  from "./sections/Abilities";
import { Experience } from "./sections/Experience";
import { Skills } from "./sections/Skills"
import { Contact } from "./sections/Contact";

function App() {

  return (
    <main>
      <Navbar />
      <TopBannerSection />
      <ProjectSection />
      <Abilities />
      <Experience />
      <Skills />
      <Contact />
    </main>
  )
}

export default App
