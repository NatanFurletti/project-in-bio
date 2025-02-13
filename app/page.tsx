import Hero from "./components/landing-page/hero";
import Header from "./components/landing-page/header";
import VideoExplanation from "./components/landing-page/video-explanation";
import Pricing from "./components/landing-page/pricing";

export default function Home() {
  return (
    <div className="max-w-7x1 mx-auto border">
      <Hero />
      <Header />
      <VideoExplanation />
      <Pricing />

      {/*
      
      <FAQ />*/}
    </div>
  );
}
