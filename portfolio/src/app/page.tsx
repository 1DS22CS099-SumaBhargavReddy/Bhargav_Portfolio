import Navbar from '../components/Navbar';
import ScrollyCanvas from '../components/ScrollyCanvas';
import Overlay from '../components/Overlay';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Accomplishments from '../components/Accomplishments';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main className="relative w-full text-[#f5f5f7]">
      <Navbar />
      
      <div id="home">
         <ScrollyCanvas />
         <Overlay />
      </div>

      <About />
      <Skills />
      <Projects />
      <Experience />
      <Accomplishments />
      <Contact />
      
    </main>
  );
}
