import About from "./components/about";
import Projects from "./components/projects";
import SectionDivider from "./components/section-divider";
import Info from "./info";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Info />
      <SectionDivider />
      <About />
      <Projects />
    </main>
  )
}
