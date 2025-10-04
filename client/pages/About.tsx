import { AboutCTA } from "@/components/sections/about/AboutCTA";
import { AboutIntro } from "@/components/sections/about/AboutIntro";
import { AboutMission } from "@/components/sections/about/AboutMission";
import { AboutTeam } from "@/components/sections/about/AboutTeam";

const About = () => {
  return (
    <div className="space-y-24 lg:space-y-32">
      <AboutIntro />
      <AboutMission />
      <AboutTeam />
      <AboutCTA />
    </div>
  );
};

export default About;
