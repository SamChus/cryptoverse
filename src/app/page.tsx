import { About } from "@/sections/About";
import { Explore } from "@/sections/Explore";
import { Feedback } from "@/sections/Feedback";
import { Footer } from "@/sections/Footer";
import { GetStarted } from "@/sections/GetStarted";
import { Hero } from "@/sections/Hero";
import { Insights } from "@/sections/Insights";
import { Navbar } from "@/sections/Navbar";
import { WhatsNew } from "@/sections/WhatsNew";
import { World } from "@/sections/World";


export default function Home() {
  return (
    <div>
      <h1>METAVERSE</h1>
      <Navbar />
      <Hero />
      <About />
      <Explore />
      <GetStarted />
      <WhatsNew />
      <World />
      <Insights />
      <Feedback />
      <Footer />
    </div>
  );
}
