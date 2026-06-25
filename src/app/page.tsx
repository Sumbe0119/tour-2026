import { ScrollProvider } from "@/context/ScrollContext";
import { BreathingExercise } from "@/components/BreathingExercise";
import MeditationHero from "@/components/Hero";
import Books from "@/components/Books";
import WorkExersice from "@/components/WorkExersice";
import Greetings from "@/components/Greetings";
import Managemant from "@/components/Managemant";
import Conclusion from "@/components/Conclusion";
import Impact from "@/components/Impact";
import ThoughtClarity from "@/components/ThoughtClarity";

export default function Home() {
  return (
    <ScrollProvider>
      <main>
        <Greetings />
        <Managemant />
        <MeditationHero />
        <BreathingExercise />
        <Impact />
        <ThoughtClarity />
        <Books />
        <WorkExersice />
        <Conclusion />
      </main>
    </ScrollProvider>
  );
}
