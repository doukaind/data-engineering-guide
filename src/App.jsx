import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Roadmap from './components/Roadmap';
import CodeExamples from './components/CodeExamples';
import Concepts from './components/Concepts';
import Tools from './components/Tools';
import Footer from './components/Footer';

export default function App() {
  const scrollToRoadmap = () => {
    document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero onStart={scrollToRoadmap} />
        <Roadmap />
        <CodeExamples />
        <Concepts />
        <Tools />
      </main>
      <Footer />
    </>
  );
}
