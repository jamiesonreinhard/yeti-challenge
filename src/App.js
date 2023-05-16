import "./styles/index.css";

// components
import NavigationMobile from "./components/NavigationMobile";
import NavigationDesktop from "./components/NavigationDesktop";
import About from "./components/About";
import Vision from "./components/Vision";
import Values from "./components/Values";

function App() {
  return (
    <>
      <div className="lg:hidden">
        <NavigationMobile />
      </div>
      <div className="mx-auto pt-[18px] lg:pt-0 pb-[116px] lg:pb-[134px] min-w-[354px] px-[30px] lg:px-[129.4px] w-full max-w-[1400px]">
        <div className="hidden lg:block">
          <NavigationDesktop />
        </div>
        <div className="w-full lg:pt-[127.5px]">
          <About />
          <Vision />
          <Values />
        </div>
      </div>
    </>
  );
}

export default App;
