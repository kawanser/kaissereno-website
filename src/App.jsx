import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import About from "./pages/About";

gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return (
    <main className="bg-primary-300">
      <About/>
    </main>
  );
};

export default App;
