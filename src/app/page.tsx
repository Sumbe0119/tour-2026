import { ScrollProvider } from "@/context/ScrollContext";
import { BreathingExercise } from "@/components/BreathingExercise";
import MeditationHero from "@/components/Hero";
import Books from "@/components/Books";
import WorkExersice from "@/components/WorkExersice";
import Greetings from "@/components/Greetings";
import Managemant from "@/components/Managemant";

export default function Home() {
  return (
    <ScrollProvider>
      <main>
        <Greetings />
        <Managemant />
        <MeditationHero />
        <BreathingExercise />
        <Books />
        <WorkExersice />
      </main>
    </ScrollProvider>
  );
}
