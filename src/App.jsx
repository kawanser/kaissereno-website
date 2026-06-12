import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return (
    <div className="bg-primary-300">
      <p class="font-primary font-thin">Thin text</p>

      <p class="font-primary font-normal">Regular text</p>

      <p class="font-primary font-bold">Bold text</p>
    </div>
  );
};

export default App;
