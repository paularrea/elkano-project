import "./App.scss";
import { Switch, Route } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import StoryLiberia from "./components/Liberia/StoryLiberia";
import NextPrevComponent from "./components/Liberia/NextPrevComponent";
import Intro from "./components/Intro/intro";
import { VFXProvider } from "react-vfx";

function App() {
  return (
    <VFXProvider>
      <ParallaxProvider>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Intro />
            </Route>
            <Route path="/liberia">
              <StoryLiberia />
              <NextPrevComponent />
            </Route>
          </Switch>
        </div>
      </ParallaxProvider>
    </VFXProvider>
  );
}

export default App;
