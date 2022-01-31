import { ScrollingProvider, Section } from "react-scroll-section";
import "./App.scss";
import { CallToAction } from "./components/molecules/CallToAction/CallToAction";
import { DividerSection } from "./components/organisms/DividerSection/DividerSection";
import { FooterSection } from "./components/organisms/FooterSection/FooterSection";
import { HeaderSection } from "./components/organisms/HeaderSection/HeaderSection";
import { InfoSection } from "./components/organisms/InfoSection/InfoSection";
import developerData from "./data/developerData.json";

function App() {
  return (
    <div className="app-container">
      <ScrollingProvider className="app-container">
        <Section id="home">
          <HeaderSection />
        </Section>
        <Section id="about-me">
          <DividerSection />
        </Section>
        <Section id="my-services">
          <InfoSection infoData={developerData} />
        </Section>
        <CallToAction />
        <Section id="how-to-reach-me">
          <FooterSection />
        </Section>
      </ScrollingProvider>
    </div>
  );
}

export default App;
