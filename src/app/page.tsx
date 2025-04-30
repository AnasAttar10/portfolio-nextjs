import data from "@/data/data.json";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen text-gray-900">
      <Navbar />
      <Hero title={data.title} hero={data.hero} />
      <About about={data.about} />
      <Skills skills={data.skills} />
      <Projects projects={data.projects} github={data.contact.github} />
      <Contact contact={data.contact} />
      <Footer />
    </main>
  );
}
