import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import Page from "@/components/utility/Page";
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";
import Education from "@/components/home/Education";
import Experience from "@/components/home/Experiences";

export default function Home() {
  return (
    <Page
      currentPage="Home"
      meta={{
        desc: "I'm a passionate web developer and designer coding beautiful websites and apps.",
      }}
    >
      <Hero />
      <div className=" space-y-32">
        <Projects />
        <Skills />
        <Experience />
        <Education />
      </div>
    </Page>
  );
}
