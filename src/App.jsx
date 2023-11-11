import { Navbar } from "./components/Navbar";
import { FullContainerLayout } from "./components/layouts/FullContainerLayout";
import { MediumContainerLayout } from "./components/layouts/MediumContainerLayout";
import { Footer } from "./components/sections/Footer";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import { Technologies } from "./components/sections/Technologies";

function App() {
  return (
    <>
    <Navbar/>
      <MediumContainerLayout>
        <Hero />
        <Technologies />
        <Projects />
      </MediumContainerLayout>
      <FullContainerLayout>
        <Footer />
      </FullContainerLayout>
    </>
  );
}

export default App;
