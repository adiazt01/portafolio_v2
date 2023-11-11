import { FullWidthLayout } from "./components/layouts/FullWidthLayout";
import { Hero } from "./components/sections/Hero";
import { Technologies } from "./components/sections/Technologies";

function App() {
  return (
    <>
      <FullWidthLayout>
        <Hero />
        <Technologies />
      </FullWidthLayout>
    </>
  );
}

export default App;
