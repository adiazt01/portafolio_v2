import { FullWidthLayout } from "./components/layouts/FullWidthLayout";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import { Technologies } from "./components/sections/Technologies";

function App() {
  return (
    <>
      <FullWidthLayout>
        <Hero />
        <Technologies />
        <Projects/>
      </FullWidthLayout>
    </>
  );
}

export default App;
