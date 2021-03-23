import "./App.scss";
import { ParallaxProvider } from "react-scroll-parallax";
import Intro from "./components/intro";
import NextPrevComponent from "./components/NextPrevComponent";

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <Intro />
        <NextPrevComponent />
      </div>
    </ParallaxProvider>
  );
}

export default App;
