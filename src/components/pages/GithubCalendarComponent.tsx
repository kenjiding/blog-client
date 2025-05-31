import ContributionGraph from "./ContributionGraph";
import { Slide } from "../animation/Slide";

export default function GithubCalendarComponent() {
  return (
    <section>
      <Slide delay={0.16} className="mb-8">
        <h2 className="animate-bounce font-incognito text-4xl font-bold tracking-tight dark:text-white text-zinc-800">
          Contrbution Graph
        </h2>
      </Slide>

      <Slide delay={0.18}>
        <ContributionGraph />
      </Slide>
    </section>
  );
}
