import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Experience from "./components/home/Experience";
import Stack from "./components/home/Stack";
import Projects from "./components/projects/Projects";
import Interests from "./components/home/Interests";
import Contact from "./components/home/Contact";
import useTheme from "./hooks/useTheme";

function App() {
  const { theme, setTheme, toggleTheme } = useTheme();

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main className="mx-auto max-w-6xl px-4 sm:px-6">
        <Hero onSetTheme={setTheme} />
        <About />
        <Experience />
        <Stack />
        <Projects />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
