import { ScrollProvider } from "@/context/ScrollContext";
import { BreathingExercise } from "@/components/BreathingExercise";
import MeditationHero from "@/components/Hero";
import Books from "@/components/Books";
import WorkExersice from "@/components/WorkExersice";
import Greetings from "@/components/Greetings";
import Managemant from "@/components/Managemant";
import Conclusion from "@/components/Conclusion";
import Impact from "@/components/Impact";

export default function Home() {
  return (
    <ScrollProvider>
      <main>
        <Greetings />
        <Managemant />
        <MeditationHero />
        <Impact />
        <BreathingExercise />
        <Books />
        <WorkExersice />
        <Conclusion />
      </main>
    </ScrollProvider>
  );
}
