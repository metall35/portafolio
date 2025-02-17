import Footer from "@/Components/Footer";
import InfoForMe from "@/Components/InfoForMe";
import PresentationForMe from "@/Components/PresentationForMe";
import Projects from "@/Components/Projects";
import FadeInSection from "@/Components/FadeInSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex flex-col gap-8 items-center sm:items-start p-8 pb-20 sm:p-20">
        <PresentationForMe />
        <InfoForMe />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
