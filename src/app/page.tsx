import { ScrollProvider } from "@/context/ScrollContext";
import { DailyBalance } from "@/components/DailyBalance";
import { BreathingExercise } from "@/components/BreathingExercise";
import { ProgressSection } from "@/components/ProgressSection";
import { SummitSection } from "@/components/SummitSection";
import MeditationHero from "@/components/Hero";

export default function Home() {
  return (
    <ScrollProvider>
      <main>
        <MeditationHero />
        <DailyBalance />
        <BreathingExercise />
        <ProgressSection />
        <SummitSection />
      </main>
    </ScrollProvider>
  );
}
